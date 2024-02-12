import React from "react";
import components from "..";
import styles from "./style.module.scss";

const ItemBlock = (props) => {
  // console.log('itemblock', props.images)
  return (
    <div className={styles.root}>
      <components.OffSale discountPercentage={props.discountPercentage} />
      <components.SimpleSlider images={props.images} title={props.title}/>
      <div>
        <components.Rating rating={props.rating} />
        <h3 className="text-s">{props.title}</h3>
        <p className="text-xs">{props.description} Read more</p>
        <components.PriceBlock item={props} />
      </div>
    </div>
  );
};

export default ItemBlock;
