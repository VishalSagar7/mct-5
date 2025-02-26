import React from 'react'
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductsContainer = () => {

    const { productsArray } = useSelector((store) => store.productsArray);
    

  return (
    <div className='min-h-screen border w-[80%] px-6 py-3'>
          {
              productsArray && productsArray?.map((product) => {
                  return <ProductCard key={product?.id} product={ product } />
              })
      }
    </div>
  )
}

export default ProductsContainer;
