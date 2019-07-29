import React from 'react';
import styled from 'styled-components';

import {
  Overlay, Title, Text,
} from '@finnoconsult/core-view';

import { Icon } from '../ui/Icon';

import CloseButton from './CloseButton';

const CenteredOverlay = styled(Overlay)`
  text-align: center;
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
  <CenteredOverlay>
    <CloseButton onClick={onCloseClicked} />
    <Icon name="thank-you-key" />
    <ThankYouTitle>Danke für Ihre Bewertung!</ThankYouTitle>
    <Text>Damit helfen Sie uns, diesen Service ständig zu verbessern.</Text>
  </CenteredOverlay>
);
