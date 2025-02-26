import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setProductsArray } from '../store/productSlice'
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Sidebar = () => {

    const dispatch = useDispatch();

    const fetchElectronics = async() => {
        
        const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`);
        dispatch(setProductsArray(response?.data))
        
    }

    const fetchJewellery = async() => {
       
        const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
        dispatch(setProductsArray(response?.data))
    }

    const fetchMensClothing = async() => {

        const response = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`);
        dispatch(setProductsArray(response?.data))
    };
    
    const fetchWomensClothing = async() => {

        const response = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`);
        dispatch(setProductsArray(response?.data))
        
    }

    const handleProductDetails = (e, text) => {
       
        if (text === "Electronics") {
            fetchElectronics();
        } else if (text === "Jewelery") {
            fetchJewellery();
        } else if (text === "Men's clothing") {
            fetchMensClothing();
        } else if (text === "Women's clothing") {
            fetchWomensClothing()
        }
    }

    const sidebarContent = [
        {
            text: "Electronics"
        },
        {
            text: "Jewelery"
        },
        {
            text: "Men's clothing"
        },
        {
            text: "Women's clothing"
        },
    ];


    useEffect(() => {
        fetchElectronics();
    },[])

  return (
      <div className='w-full h-full flex flex-col gap-4 '>
          
          {
              sidebarContent?.map((item) => (
                  <div
                      className='w-full hover:bg-white hover:text-black px-4 py-1 rounded transition duration-200'
                      key={item.text}>
                      <Link
                          onClick={(e)=>handleProductDetails(e,item.text)}
                          className='w-full' 
                      >
                          {item.text}
                      </Link>
                  </div>
              ))
          }
          
      
    </div>
  )
}

export default Sidebar;
