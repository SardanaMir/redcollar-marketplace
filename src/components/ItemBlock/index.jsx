import React from "react";
import components from "..";
import images from "../../assets/images/index";
import styles from "./style.module.scss";

const ItemBlock = (props) => {

  return (
    <div className={styles.root}>
      <components.OffSale discountPercentage={props.discountPercentage} />
      <img src="" alt="фото товара" />
      <div>
        <components.Rating rating={props.rating} />
        <h3 className="text-s">{props.title}</h3>
        <p className="text-xs">{props.description} Read more</p>
        <components.PriceBlock price={props.price} item={props} />
      </div>
    </div>
  );
};

export default ItemBlock;
