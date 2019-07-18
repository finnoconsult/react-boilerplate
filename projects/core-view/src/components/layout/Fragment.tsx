import styled, { css } from 'styled-components';

// import styles from '../../theme/app.global.scss';
export interface FragmentProps {
  padding: number;
  margin: number;
  normal: number | boolean;
  marginLeft: string | number;
  marginRight: string | number;
  marginTop: string | number;
  marginBottom: string | number;
  paddingTop: string | number;
  paddingBottom: string | number;
  background: string;
  hidden: boolean;
  overflow: string;
  width: number;
  fullWidth: boolean;
  fullHeight: boolean;
  autoHeight: boolean;
  auto: boolean;
  height: number;
  border: string | boolean;
  round: number | boolean;
  underline: number | boolean;
  compact: number | boolean;
}

export const Fragment = styled.div<FragmentProps>`
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  transition: all 0.5 ease;


  ${props => props.color && css`
    color: ${props.color};
  `};
  ${'' /*
    ${props => props.small && css`
      font-size: ${styles.webSmallfontSize} !important;
    `};
    ${props => props.medium && css`
      font-size: ${styles.webMediumfontSize} !important;
    `};
    ${props => props.normal && css`
      font-size: ${styles.webNormalfontSize} !important;
    `};
    ${props => props.big && css`
      font-size: ${styles.webBigfontSize} !important;
    `};
    ${props => props.huge && css`
      font-size: ${styles.webHugefontSize} !important;
    `};
    ${props => props.header && css`
      font-size: ${styles.webTitleSize} !important;
    `};
    ${props => props.bold && css`
      font-weight: ${props.bold !== true ? props.bold : 'bold'};
    `};
  */}
  ${props => props.normal && css`
    font-weight: normal;
  `};

  ${props => props.marginLeft && css`
    margin-left: ${props.marginLeft};
  `};
  ${props => props.marginRight && css`
    margin-left: ${props.marginLeft};
  `};
  ${props => props.marginTop && css`
    margin-top: ${props.marginTop};
  `};
  ${props => props.marginBottom && css`
    margin-bottom: ${props.marginBottom};
  `};

  ${props => props.paddingTop && css`
    padding-top: ${props.paddingTop};
  `};
  ${props => props.paddingBottom && css`
    padding-bottom: ${props.paddingBottom};
  `};

  ${props => props.background && css`
    background: ${props.background};
  `};

  ${props => props.hidden && css`
    display: none;
  `};
  ${props => props.overflow && css`
    overflow: ${props.overflow};
  `};

  ${props => props.width && css`
    width: ${props.width};
  `};
  ${props => props.fullWidth && css`
    width: 100%;
  `};
  ${props => props.fullHeight && css`
    height: 100%;
  `};
  ${props => (props.autoHeight || props.auto) && css`
    height: auto;
  `};
  ${props => props.height && css`
    height: ${props.height};
  `};

  ${props => props.border && css`
    border: ${`solid 1px ${(props.border && props.border !== true) || 'lightgray'}`};
  `};
  ${props => props.round && css`
    border-radius: ${(props.round !== true && props.round) || '1em'};
  `};
  ${props => props.underline && css`
    text-decoration: underline;
  `};
  ${props => props.compact && css`
    line-height: 0;

    & > figure {
      line-height: 0;
    }

    & > *, p, h1, h2, h3, h4, h5, h6 {
      line-height: normal;
    }
  `};

`;
Fragment.displayName = 'Fragment';


export const FlexFragment = styled(Fragment)`
  flex: 1 1 auto;
  display: flex;

  ${'' /* ${props => props.flex && css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props.left && 'flex-start') || 'center'};
  `};
  ${props => props.center && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};
  ${props => props.bottom && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  `};
  ${props => props.left && css`
    text-align: left !important;
  `};
  ${props => props.right && css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `};
  ${props => props.rowTop && css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  `};
  ${props => props.top && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `};
  ${props => props.between && css`
    justify-content: space-between;
  `}; */}
`;
FlexFragment.displayName = 'FlexFragment';

export default Fragment;
export const Flex = FlexFragment;
