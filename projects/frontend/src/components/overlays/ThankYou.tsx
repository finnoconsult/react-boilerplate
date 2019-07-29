import React from 'react';
import styled from 'styled-components';

import {
  Overlay, Title, Text, Button, View,
} from '@finnoconsult/core-view';

import { Icon } from '../ui/Icon';

const CloseButtonStyles = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 8px;
`;

const ThankYouTitle = styled(Title)`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 8px;
`;

interface Props {
  onCloseClicked: () => void;
}

export default ({ onCloseClicked }: Props) => (
  <Overlay>
    <CloseButtonStyles onClick={onCloseClicked}>
      <Button>
        <Icon name="close" />
      </Button>
    </CloseButtonStyles>
    <Icon name="thank-you-key" />
    <ThankYouTitle>Danke für Ihre Bewertung!</ThankYouTitle>
    <Text>Damit helfen Sie uns, diesen Service ständig zu verbessern.</Text>
  </Overlay>
);
