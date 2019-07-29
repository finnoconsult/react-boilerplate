import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from './Text';
import { Children } from '../../types';
import { useLocation } from '../..';

interface CommonButtonProps {
  disabled?: boolean;
  cta?: boolean;
  info?: boolean;
  cancel?: boolean;

}
interface ButtonStylesProps extends CommonButtonProps{
  shouldFormat?: boolean;
}

export const ButtonStyles = styled.div<ButtonStylesProps>`
  ${props => props.shouldFormat && `
    min-height: 48px;
    display: flex;
  `}

  & > button,
  & > a {
    width: 100%;

    ${props => props.shouldFormat && `
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${(props.cta ? props.theme.colors.cta : props.theme.colors.background)};

      border: ${(props.info && `1px solid ${props.theme.colors.text}`)};
      border-radius: 4px;
      padding: 13px;

      cursor: pointer;

      &:active {
        background-color: #fac206;
      }

      &:disabled {
        background-color: ${props.theme.colors.divider};
      }
      ${props.disabled && `
        background-color: ${props.theme.colors.divider};
      `}

    `}
  }
`;

const ButtonText = styled(Text)`
  font-size: ${props => props.theme.font.sizeButton};
  font-weight: bold;
  font-family: ${props => props.theme.font.face.bold.default};
`;

interface Props extends CommonButtonProps{
  title?: string;
  children?: Children;
  onClick?: () => void;
  link?: string;
  back?: boolean;
}

export default (props: Props) => {
  const location = useLocation();

  const {
    title, cta, info, cancel, children, disabled, onClick, link, back,
  } = props;

  const shouldFormat = cta || info || cancel;

  const buttonContent = (
    <>
      {(title) && (
        <ButtonText>{title}</ButtonText>
      )}
      {children}
    </>
  );

  const backClick = () => {
    location.back();
  };

  const buttonClick = back ? backClick : onClick;
  const enabledButtonClick = !disabled ? buttonClick : () => {};
  // const buttonLink = !back && !onClick && link;
  const buttonLink = !back && !disabled && link;

  return (
    <ButtonStyles
      disabled={disabled}
      shouldFormat={shouldFormat}
      cta={cta}
      info={info}
      cancel={cancel}
      onClick={enabledButtonClick}
    >
      {buttonLink ? <Link to={buttonLink}>{buttonContent}</Link> : <button disabled={disabled} type="button">{buttonContent}</button>}
    </ButtonStyles>
  );
};
