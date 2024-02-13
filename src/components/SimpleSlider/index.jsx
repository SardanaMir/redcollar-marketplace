import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";

export default function SimpleSlider({ images, title }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      {images.length > 1 ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles.imgWrapper}>
              <img className={styles.img} src={image} alt={title} />
            </div>
          ))}
        </Slider>
      ) : (
        <>
          {images.map((image, index) => (
            <div key={index} className={styles.imgWrapper}>
              <img className={styles.img} src={image} alt={title} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
