import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const IndividualComponent = () => {
    const { individualProduct } = useSelector((store) => store.individualProduct);

    console.log("individual product", individualProduct);

    if (!individualProduct) {
        return (
            <div>
                <Navbar />
                <div className='px-12 py-6 text-center'>
                    <p className='text-xl text-gray-600'>No product details available.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />

            <div className='px-12 py-8 max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                   
                    <div className='flex justify-center items-center'>
                        <img
                            src={individualProduct.image}
                            alt={individualProduct.title}
                            className='w-full max-w-md h-auto rounded-lg shadow-lg'
                        />
                    </div>

                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold text-gray-800'>{individualProduct.title}</h1>
                        <p className='text-gray-600'>{individualProduct.description}</p>

                        {/* Price */}
                        <p className='text-2xl font-semibold text-gray-900'>
                            ${individualProduct.price}
                        </p>

                        {/* Rating */}
                        <div className='flex items-center space-x-2'>
                            <span className='text-yellow-500 text-lg'>
                                {'★'.repeat(Math.round(individualProduct.rating.rate))}
                            </span>
                            <span className='text-gray-500'>
                                ({individualProduct.rating.count} reviews)
                            </span>
                        </div>

                        {/* Category */}
                        <p className='text-sm text-gray-500'>
                            <span className='font-medium'>Category:</span> {individualProduct.category}
                        </p>

                        {/* Add to Cart Button (Optional) */}
                        <button
                            className='w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors'
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualComponent;
