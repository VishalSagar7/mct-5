import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div>
            <Navbar />

            
            <div className='px-12 py-8'>
                <h1 className='text-3xl font-bold text-center mb-6'>Contact Us</h1>

                <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                   
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    required
                                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    required
                                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='4'
                                    required
                                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
                        <div className='space-y-4'>
                            <div>
                                <h3 className='text-lg font-medium'>Email</h3>
                                <p className='text-gray-600'>support@example.com</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-medium'>Phone</h3>
                                <p className='text-gray-600'>+1 (123) 456-7890</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-medium'>Address</h3>
                                <p className='text-gray-600'>
                                    123 Main Street<br />
                                    City, State, ZIP Code<br />
                                    Country
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;