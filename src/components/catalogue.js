import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Catalogue(){
    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
          <Carousel>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="/imgs/bienvenue.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/imgs/store_backround.png"
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}