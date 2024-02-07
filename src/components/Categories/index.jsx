import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategories } from '../../api'
import styles from './style.module.scss'
import { setCategories } from '../../redux/slices/categoriesSlice'

const Categories = () => {
    const isActive = useSelector(state => state.search.isActive)
    const categoriesData = useSelector(state => state.categories.categories);
    const dispatch = useDispatch()
    console.log('categories Data', categoriesData)

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            // const data = await allCategories();
            dispatch(setCategories(data));
            console.log('categories', data)
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchCategories();
    }, []);

  return (
    
    <>
    {isActive ? (
        <></>
        ):(
            <div className={styles.root}>
                {
                    categoriesData.map(category => (
                        <div className={styles.category}>
                            {category}
                        </div>
                    ))
                }
            </div>
        )
    }
    </>
  )
}

export default Categories