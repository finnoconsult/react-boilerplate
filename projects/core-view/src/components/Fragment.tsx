import styled, { css } from 'styled-components';
import { HTMLBoolean } from '@finnoconsult/core-model';

// import styles from '../../theme/app.global.scss';
export interface FragmentProps {
  padding?: string | number | boolean;
  margin?: string | number | boolean;
  normal?: number | boolean;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  background?: string;
  hidden?: boolean;
  overflow?: string;
  width?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  autoHeight?: boolean;
  auto?: boolean;
  height?: number;
  border?: string | boolean;
  round?: number | boolean;
  underline?: number | boolean;
  compact?: number | boolean;
  nowrap?: string | boolean;
  tiny?: boolean;
  small?: boolean;
  subTitle?: boolean;
  title?: boolean;
  text?: boolean;
  bold?: string | boolean;
  style?: {};
}

export const Fragment = styled.div<FragmentProps>`
  padding: ${props => (props.padding === true ? props.theme.spacing.basicPadding : props.padding) || 0};
  margin: ${props => (props.margin === true ? props.theme.spacing.basicMargin : props.margin) || 0};
  transition: all 0.5 ease;


  ${props => props.color && css`
    color: ${props.color};
  `};
  ${props => props.tiny && css`
    font-size: ${props.theme.font.tinyText} !important;
  `};
  ${props => props.small && css`
    font-size: ${props.theme.font.smallText} !important;
  `};
  ${props => props.subTitle && css`
    font-size: ${props.theme.font.subTitle} !important;
  `};
  ${props => props.title && css`
    font-size: ${props.theme.font.title} !important;
  `};
  ${props => props.text && css`
  font-size: ${props.theme.font.text} !important;
  `};
  ${props => props.bold && css`
    font-weight: ${props.bold === true ? 'bold': props.bold};
    font-family: ${props.theme.font.face.bold.default};
  `};
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
  ${props => props.paddingLeft && css`
    padding-left: ${props.paddingLeft};
  `};
  ${props => props.paddingRight && css`
    padding-left: ${props.paddingLeft};
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
  ${props => props.nowrap && css`
    white-space: ${(props.round !== true && props.round) || 'nowrap'};
  `};

`;
Fragment.displayName = 'Fragment';

export interface FlexFragmentProps extends FragmentProps {
  center?: HTMLBoolean;
  row?: HTMLBoolean;
  column?: HTMLBoolean;

  between?: HTMLBoolean;
  left?: HTMLBoolean;
  right?: HTMLBoolean;
  start?: HTMLBoolean;
  end?: HTMLBoolean;
}

export const FlexFragment = styled(Fragment)<FlexFragmentProps>`
  flex: 1 1 auto;
  display: flex;

  ${props => props.row && css`
    flex-direction: row;
  `}
  ${props => props.column && css`
  flex-direction: column;
  `}
  ${props => props.center && css`
    align-items: center;
    justify-content: center;
  `};
  ${props => props.between && css`
    justify-content: space-between;
  `};
  ${props => (props.left || props.start) && css`
    align-items: center;
    justify-content: flex-start;
    text-align: left !important;
  `};
  ${props => (props.right || props.end) && css`
    align-items: center;
    justify-content: flex-end;
    text-align: right !important;
  `};
  ${'' /* ${props => props.flex && css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props.left && 'flex-start') || 'center'};
  `};
  ${props => props.rowTop && css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  `};
 */}
`;
FlexFragment.displayName = 'FlexFragment';

export default Fragment;
export const Flex = FlexFragment;
