import React, { useState } from "react";
import components from "..";
import '../../scss/commonStyles.scss';
import styles from "./style.module.scss";

const ItemBlock = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div className={styles.root}>
          <div>
            <components.Rating rating={props.rating} />
            <h3 className="text-s mt8px">{props.title}</h3>
            <p className="text-xs mt8px">
              {props.description}
              <span className={styles.link} onClick={toggleOpen}>Hide description</span>
            </p>
          </div>
          <components.PriceBlock item={props} />
        </div>
      ) : (
        <div className={styles.root}>
          <div>
            <components.OffSale discountPercentage={props.discountPercentage} />
            <components.SimpleSlider images={props.images} title={props.title} />
          </div>
          <div>
            <components.Rating rating={props.rating} />
            <h3 className="text-s mt8px">{props.title}</h3>
            <p className="text-xs mt8px">
              {props.description}
              <span className={styles.link} onClick={toggleOpen}>Read more</span>
            </p>
            <components.PriceBlock item={props} />
          </div>
        </div>
      )}
    </>
  );
};

export default ItemBlock;
