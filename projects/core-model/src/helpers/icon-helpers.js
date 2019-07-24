// eslint-disable-next-line @typescript-eslint/no-var-requires
const camelCase = require('camelcase');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const {
  readdirSync,
  lstatSync,
  readFileSync,
  writeFileSync,
  openSync,
  writeSync,
} = fs;

// the maximum difference between the defined colors
// and the colors that should be replaced (in percentage)
const COLOR_MAXIMUM_DIFFERENCE = 10;

const IMAGE_INPUT_PATH = 'projects/frontend/src/theme/images';
const MODULE_PATH = 'projects/frontend/src/content';
const IMAGE_OUTPUT_PATH = '../theme/images';
const MODULE_FILE_NAME = 'iconsGenerated.ts';

const fileExtensions = ['svg', 'png'];
// TODO: fix 'js' for TS

const colors = {
  // black: '#282828',
  // blue: '#00a8d6',
  // grey: '#8b959e',
  // orange: '#d64218',
  // // ocher: '#F29315',
  // white: '#ffffff',
};

const restrictedFolders = [
  // NOTE: these folders are excluded
  // 'jsx',
  'ocher',
  'settings',
  // TODO: add all above color folders once all icon('') is removed!
];

const relativeImportPath = `${IMAGE_OUTPUT_PATH}`;
// const relativeImportPath = `${MODULE_PATH.replace(/[^/]+/g, '..')}/${IMAGE_INPUT_PATH}`;

const convertToRgb = color => [
  parseInt(color.substring(1, 3), 16),
  parseInt(color.substring(3, 5), 16),
  parseInt(color.substring(5, 7), 16),
];

const calculateDifference = (color1, color2) => {
  const rgb1 = convertToRgb(color1);
  const rgb2 = convertToRgb(color2);
  const differenceRgb = rgb1.map((col, index) => Math.abs(rgb2[index] - col));
  return (100 * (differenceRgb[0] + differenceRgb[1] + differenceRgb[2])) / (3 * 255);
};

const splitFileName = (file) => {
  const [, name, extension] = /(.*)\.(.+)/g.exec(file);
  return [name, extension];
};

const findColors = text => text.match(/#([0-9a-fA-F]){6}/gm);

const colorsArray = Object.keys(colors);

const getFilesFor = folder => readdirSync(`${IMAGE_INPUT_PATH}/${folder}`).filter(
  file => lstatSync(`${IMAGE_INPUT_PATH}/${folder}/${file}`).isFile(),
).map(splitFileName).filter(([, extension]) => fileExtensions.includes(extension));

const otherDirs = readdirSync(IMAGE_INPUT_PATH, 'utf8')
  .filter(entry => !colorsArray.includes(entry) && !restrictedFolders.includes(entry) && lstatSync(`${IMAGE_INPUT_PATH}/${entry}`).isDirectory());

const structure = colorsArray.reduce((acc, color) => ({
  ...acc,
  [color]: getFilesFor(color),
}), {});

const containedItems = {};
colorsArray.forEach((color) => {
  containedItems[color] = new Set(structure[color].filter(([, extension]) => extension === 'svg').map(([name]) => name));
});

colorsArray.forEach((color) => {
  const svgs = structure[color].filter(([, extension]) => extension === 'svg');
  const otherColors = colorsArray.filter(otherColor => otherColor !== color);
  svgs.forEach(([name]) => {
    otherColors.forEach((other) => {
      if (!containedItems[other].has(name)) {
        const fileText = readFileSync(`${IMAGE_INPUT_PATH}/${color}/${name}.svg`, { encoding: 'utf8' });
        const colorsInFile = findColors(fileText);
        const colorsToBeChanged = colorsInFile.filter(fileColor => calculateDifference(fileColor, colors[color]) <= COLOR_MAXIMUM_DIFFERENCE);
        const newFile = colorsToBeChanged.length
          ? fileText.replace(new RegExp(colorsToBeChanged.map(c => `(${c})`).join('|'), 'gm'), colors[other])
          : fileText;
        writeFileSync(`${IMAGE_INPUT_PATH}/${other}/${name}.svg`, newFile);
        console.warn('creating', `${IMAGE_INPUT_PATH}/${other}/${name}.svg`);
        containedItems[other].add(name);
      }
    });
  });
});

const exportObject = {
  // red: {},
  // gray: {},
};

const indexFile = openSync(`${MODULE_PATH}/${MODULE_FILE_NAME}`, 'w');

const stringify = (obj, key, level) => {
  if (typeof obj === 'string') {
    return `${' '.repeat(level * 2)}${key}${obj === key ? '' : `: ${obj}`},\n`;
  }
  return `${' '.repeat(level * 2)}${key ? `${key}: ` : ''}{\n${
    Object.keys(obj).reduce((acc, objKey) => `${acc}${stringify(obj[objKey], objKey, level + 1)
    }`, '')}${' '.repeat(level * 2)}},\n`;
};

const extenstionLinter = extension => ((extension === 'js') ? '' : `.${extension}`);
const extenstionCleaner = name => name.split('.').splice(0, 1).join('');

const processFile = (color, name, extension) => {
  const importName = camelCase(`icon-${color}-${extenstionCleaner(name)}`);
  const importCommand = `import ${importName} from '${relativeImportPath}/${color}/${name}${extenstionLinter(extension)}';`;
  // console.log(importCommand);
  writeSync(indexFile, `${importCommand}\n`);
  exportObject[color][importName] = importName;
  if (color === 'grey') {
    exportObject.gray[camelCase(`icon-gray-${name}`)] = importName;
  }
  if (color === 'orange') {
    exportObject.red[camelCase(`icon-red-${name}`)] = importName;
  }
};

colorsArray.forEach((color) => {
  exportObject[color] = {};

  containedItems[color].forEach((name) => {
    processFile(color, name, 'svg');
  });

  const otherFiles = structure[color].filter(([, extension]) => extension !== 'svg');
  otherFiles.forEach(([name, extension]) => {
    processFile(color, name, extension);
  });
});

otherDirs.forEach((dir) => {
  exportObject[dir] = {};
  getFilesFor(dir).forEach(([name, extension]) => {
    processFile(dir, name, extension);
  });
});

const exportString = stringify({ ico: exportObject }, null, 0).slice(0, -2);

writeSync(indexFile, `\nexport const iconsGenerated = ${exportString};\n`);
