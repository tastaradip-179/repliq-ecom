import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { useParams } from 'react-router-dom'

const Product = () => {

  let [product, setProduct] = useState([]);
  let [error, setError] = useState("");

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/${params.id}`
    )
        .then((response) => response.json())
        .then(
            (result) => {
              setProduct(result);
            },
            (error) => {
              setError(error);
            }
        );
  }, []);

  return (
    <>
      <div className='container'>
        <div className='flex gap-10'>
            <div className='w-[20%]'>
              <Sidenav/>
            </div>
            <div className='w-[80%]'>
              <h3 class="leading-normal text-lg text-gray-500 my-10">Product Details</h3>
              <div className='flex md:flex-row flex-col md:flex-nowrap flex-wrap md:justify-between justify-around gap-10'>
                  <div className='md:w-[50%] w-full'>
                      <div className='mb-4'>
                        <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Title
                        </label>
                        <input type='text' name='title' 
                          value={product.title}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='brand' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Brand
                        </label>
                        <input type='text' name='brand' 
                          value={product.brand}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                          <label for='categories' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                              Category
                          </label>
                          <select name='categories'
                              className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                              readOnly>
                              <option value=''>{product.category}</option>
                          </select>
                      </div>
                      <div className='mb-4'>
                        <label for='discount' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Discount Percentage
                        </label>
                        <input type='text' name='discount' 
                          value={product.discountPercentage}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                          <label for='image' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                              Image
                          </label>
                          <img src={product.thumbnail} alt="no img" className='w-[300px]'/>
                      </div>    
                  </div>
                  <div className='md:w-[50%] w-full'>
                      <div className='mb-4'>
                        <label for='price' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Price
                        </label>
                        <input type='number' name='price' 
                          value={product.price}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='quantity' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Quantity
                        </label>
                        <input type='number' name='quantity' 
                          value={product.stock}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' 
                          readOnly/>
                      </div>
                      <div className='mb-4'>
                        <label for='description' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Description
                        </label>
                        <textarea name="description" rows="5"
                          value={product.description}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly>
                        </textarea>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Product