import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { allCategories } from "../../api";
import { setCategories } from "../../redux/slices/categoriesSlice";
import { getChosenCategory } from "../../api";
import {
  setFilteredProducts,
  setChosenCategories,
} from "../../redux/slices/filterSlice";
import "swiper/css";
import styles from "./styles.module.scss";

const Categories = () => {
  const isSearchInputOpen = useSelector((state) => state.search.isActive);
  const categoriesData = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const chosenCategory =
    useSelector((state) => state.filter.chosenCategory) || "all";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await allCategories();
        data.unshift("all");
        dispatch(setCategories(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleFilter = async (e) => {
    const clickedCategory = e.target.textContent;
    const res = await getChosenCategory(clickedCategory);
    dispatch(setFilteredProducts(res.products));
    dispatch(setChosenCategories(clickedCategory));
  };

  return (
    <>
      {isSearchInputOpen ? (
        <></>
      ) : (
        <div className={styles.container}>
          <Swiper spaceBetween={1} slidesPerView={9}>
            <>
              {categoriesData.map((category, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={(e) => handleFilter(e)}
                    className={`${styles.category} text-m ${
                      chosenCategory === category ||
                      (chosenCategory === "" && category === "all")
                        ? styles.selected
                        : ""
                    }`}
                  >
                    {category}
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Categories;
