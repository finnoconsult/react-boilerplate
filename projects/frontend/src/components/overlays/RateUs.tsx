import React from 'react';
import styled from 'styled-components';

import {
  Overlay, Title, Image, Button,
} from '@finnoconsult/core-view';

import CloseButton from './CloseButton';

import smileys from '../static/mobile/content/rate-us-smileys.svg';

const RateUsTitle = styled(Title)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 48px;
`;

interface Props {
  onCloseClicked: () => void;
  smileyLink: string;
}

export default ({ onCloseClicked, smileyLink }: Props) => (
  <Overlay>
    <CloseButton onClick={onCloseClicked} />
    <RateUsTitle>Wie zufrieden sind Sie insgesamt mit dem Schlüsselnotdienst durch den ADAC?</RateUsTitle>
    <Button link={smileyLink}>
      <Image source={smileys} className="fullWidth" />
    </Button>
  </Overlay>
);
