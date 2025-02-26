import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProductsContainer from './ProductsContainer';

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      
      <div className='flex'>
        <div className='w-[20%] bg-gray-900 px-12 py-10 text-white text-lg font-semibold min-h-screen'>
          <Sidebar />
        </div>

        <ProductsContainer />
      </div>
      
    </div>
  )
}

export default ProductsPage;

