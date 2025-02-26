import React from 'react';
import { useNavigate, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIndividualProduct } from '../store/individualProductSlice';

const ProductCard = ({ product }) => {
    
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
    const handleSetIndividualProduct = (product) => {
        navigate('/individualproduct');
        dispatch(setIndividualProduct(product));
    }

    return (
        <div
            onClick={() => handleSetIndividualProduct(product)}
            className='h-[200px] w-full flex items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-100'>
       
            <div className='w-[150px] h-[150px] flex items-center justify-center rounded-lg overflow-hidden'>
                <img
                    src={`${product?.image}`}
                    alt={product?.title}
                    className='w-full h-full object-contain'
                />
            </div>

            {/* Product Details */}
            <div className='flex-1 ml-4'>
                <h2 className='text-lg font-semibold text-gray-800'>{product?.title}</h2>
                <p className='text-sm text-gray-600 mt-2 line-clamp-2'>{product?.description}</p>
                {/* <div className='mt-2 flex items-center'>
                    <span className='text-yellow-500'>{'★'.repeat(Math.round(product?.rating?.rate))}</span>
                    <span className='text-gray-400 ml-1'>
                        ({product?.rating?.count} reviews)
                    </span>
                </div>
                <p className='text-lg font-bold text-gray-900 mt-2'>${product?.price}</p>
                <p className='text-sm text-gray-500 mt-1'>{product?.category}</p> */}
            </div>
        </div>
    );
};

export default ProductCard;