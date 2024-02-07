import React, {useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector } from 'react-redux'
import { allCategories } from '../../api'
import { setCategories } from '../../redux/slices/categoriesSlice'
import 'swiper/css';

import styles from './style.module.scss'


const Categories = () => {
    const isActive = useSelector(state => state.search.isActive)
    const categoriesData = useSelector(state => state.categories.categories);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const data = await allCategories();
            dispatch(setCategories(data));
            console.log('categories', data)
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchCategories();
    }, []);

    const handleActive = (e) =>{
        console.log(e.target)
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
                    <div onClick={(e)=>handleActive(e)} className={styles.category}>
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