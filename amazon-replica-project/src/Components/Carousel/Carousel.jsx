import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {img} from './images/data'
import classes from './carousel.module.css'

function CarouselEffects() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
            img.map((imageItemLink) => {
                return <img src={imageItemLink} alt="" />;
            })
        }
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffects