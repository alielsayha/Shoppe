import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchAsyncProductFromCategory } from '../../store/categorySlice';
import ProductList from '../../components/ProductList/ProductList';
import { STATUS } from '../../utils/status';
import Loader from '../../components/Loader/Loader';

function CategoryProduct() {
  const categoryType = useParams()
  const dispatch = useDispatch();
  const categoriesProduct = useSelector(state => state.category.categoriesProduct);
  const categoriesProductStatus = useSelector(state => state.category.categoriesProductStatus)


console.log(categoryType.category);
  useEffect(() => {
    dispatch(fetchAsyncProductFromCategory(categoryType.category))
  }, [dispatch , categoryType.category])

  
console.log(categoriesProduct);



  // if()


  return (
    <div className='container'>
              <div className="category-item py-3">
                <div className="title-md text-center my-4">
                  <h3>{categoryType.category}</h3>
                </div>
                <div >
                  {categoriesProductStatus === STATUS.LOADING ? (
                    <Loader />
                  ) : (
                    <ProductList products={categoriesProduct} />
                  )}
                </div>
              </div>
    </div>
  )
}

export default CategoryProduct 