import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './brand.css';

const Brand = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="gpt3__brand section__padding">
      <Carousel responsive={responsive}>
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
      </Carousel>
    </div>
  );
}
export default Brand;

