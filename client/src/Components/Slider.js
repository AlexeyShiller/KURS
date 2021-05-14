import React from 'react';
import { Carousel } from 'react-bootstrap';
import Silicon_Valley from '../Common/Silicon_Valley.jpg';

export default function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ height: '600px', alignItems: 'center' }}>
          <img className="d-block w-100" src={Silicon_Valley} alt="First-slide" />
          <Carousel.Caption>
            <h3>Network Project</h3>
            <p>DDDDDDDWEWEW#F</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px', alignItems: 'center' }}>
          <img className="d-block w-100" src={Silicon_Valley} alt="First-slide" />
          <Carousel.Caption>
            <h3>Network Project</h3>
            <p>DDDDDDDWEWEW#F</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px', alignItems: 'center' }}>
          <img className="d-block w-100" src={Silicon_Valley} alt="First-slide" />
          <Carousel.Caption>
            <h3>Network Project</h3>
            <p>DDDDDDDWEWEW#F</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
