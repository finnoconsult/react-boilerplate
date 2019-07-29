import React from 'react';
import styled from 'styled-components';

import {
  Button, View,
} from '@finnoconsult/core-view';

import { Icon } from '../ui/Icon';

const CloseButtonStyles = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export default ({ onClick }: { onClick: () => void }) => (
  <CloseButtonStyles onClick={onClick}>
    <Button>
      <Icon name="close" />
    </Button>
  </CloseButtonStyles>
);
