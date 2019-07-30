import styled from 'styled-components';
import { FlexView } from '../FlexView';

interface DialogType {
  open?: boolean;
  center?: boolean;
}

export const DialogStyle = styled(FlexView).attrs(() => ({ as: 'dialog' }))<DialogType>`
  position: fixed;
  border: none;
  background: none;
  background: transparent;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;


  &[open] {
    display: flex;
    background: ${props => props.theme.colors.overlay};
    height: 100vh;
    height: ${props => `${props.theme.getDeviceHeight}px`};
    z-index: 99;
  }
  &, &[open="false"] {
    display: none;
    z-index: 1;
  }
`;
DialogStyle.displayName = 'DialogStyle';

export const DialogContentStyle = styled(FlexView) <DialogType>`
  background-color: ${props => props.theme.colors.background};
  min-height: 30vh;
  flex: 0 0 auto;
  justify-content: flex-start;
  width: 100%;
`;
DialogContentStyle.displayName = 'DialogContentStyle';
