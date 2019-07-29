import React from 'react';
import styled from 'styled-components';

import {
  Overlay, Title, Image, Button, View,
} from '@finnoconsult/core-view';


import smileys from '../static/mobile/content/rate-us-smileys.svg';
import { Icon } from '../ui/Icon';

const CloseButtonStyles = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 8px;
`;

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
    <CloseButtonStyles onClick={onCloseClicked}>
      <Button>
        <Icon name="close" />
      </Button>
    </CloseButtonStyles>
    <RateUsTitle>Wie zufrieden sind Sie insgesamt mit dem Schlüsselnotdienst durch den ADAC?</RateUsTitle>
    <Button link={smileyLink}>
      <Image source={smileys} className="fullWidth" />
    </Button>
  </Overlay>
);
