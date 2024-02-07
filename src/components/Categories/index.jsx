import React, {useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux'
import { allCategories } from '../../api'
import { setCategories } from '../../redux/slices/categoriesSlice'
import { getChosenCategory } from '../../api'
import { setFilteredProducts, setChosenCategories } from '../../redux/slices/filterSlice';
import 'swiper/css';
import styles from './style.module.scss'

const Categories = () => {
    const isActive = useSelector(state => state.search.isActive)
    const categoriesData = useSelector(state => state.categories.categories);
    const dispatch = useDispatch()
    const chosenCategory = useSelector(state => state.filter.chosenCategory);

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const data = await allCategories();
            dispatch(setCategories(data));
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchCategories();
    }, []);

    const handleFilter = async (e) =>{
        const clickedCategory = e.target.textContent;
        if (chosenCategory.includes(clickedCategory)) {
            const updatedChosenCategories = chosenCategory.filter(category => category !== clickedCategory);
            dispatch(setChosenCategories(updatedChosenCategories)); 
            dispatch(setFilteredProducts([])); 
        } else {
            dispatch(setChosenCategories([...chosenCategory, clickedCategory]))
            const res = await getChosenCategory(clickedCategory);
            dispatch(setFilteredProducts(res.products));
        }
    }

  return (
    <>
    {isActive ? (
        <></>
        ):(
        <div className={styles.container}>
        <Swiper
            spaceBetween={1}
            slidesPerView={9}
            onSlideChange={(swiper) => (console.log('slide change'))}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {
                categoriesData.map(category => (
                <SwiperSlide>
                    <div onClick={(e)=>handleFilter(e)} 
                    className={`${styles.category} ${chosenCategory.includes(category) ? styles.selected : ''}`}>
                    {category}
                    </div>
                </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
        )
    }
    </>
  )
}

export default Categories