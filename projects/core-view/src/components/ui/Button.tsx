import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from './Text';
import { Children } from '../../types';

interface CommonButtonProps {
  disabled?: boolean;
  cta?: boolean;
  info?: boolean;
  cancel?: boolean;

}
interface ButtonStylesProps extends CommonButtonProps{
  shouldFormat?: boolean;
}

const ButtonStyles = styled.div<ButtonStylesProps>`
  ${props => props.shouldFormat && `
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
`;

interface Props extends CommonButtonProps{
  title?: string;
  children?: Children;
  onClick?: () => void;
  link?: string;
}

export default (props: Props) => {
  const {
    title, cta, info, cancel, children, disabled, onClick, link,
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
  return (
    <ButtonStyles
      disabled={disabled}
      shouldFormat={shouldFormat}
      cta={cta}
      info={info}
      cancel={cancel}
      onClick={onClick}
    >
      {link ? <Link to={link}>{buttonContent}</Link> : <button disabled={disabled} type="button">{buttonContent}</button>}
    </ButtonStyles>
  );
};
