import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './style.module.scss';

export default function SimpleSlider({images, title}) {
  // console.log('slider', props.images)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {
          images.map(image =>(
            <div className={styles.imgWrapper}>
              <img className={styles.img} src={image} alt={title} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}