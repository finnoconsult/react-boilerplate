import React from 'react';
import { inject, observer } from 'mobx-react';

import Screen from '../containers/screens/Screen';

import { ScrollView } from '../components/layout';

import Carousel from '../components/carousel/Carousel';
import Image from '../components/ui/Image';

import images from './images.json';


@inject('stores', 'actions') @observer
export default class CarouselDemo extends Screen {

  static defaultProps = {
    pageTitle: 'Carousel',
  }

  get images() {
    return images.filter(image => image.match(/thumb/g));
  }


  render() {
    return (
      <ScrollView>
        <Carousel dots>
          {this.images.map((image, index) => (
            <Image key={index} source={image} />
          ))}
        </Carousel>
      </ScrollView>

    );
  }
}
