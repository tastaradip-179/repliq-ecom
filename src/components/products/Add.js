import React from 'react'
import Sidenav from '../Sidenav'

const ProductAdd = () => {
  return (
    <>
      <div className='container'>
        <div className='flex gap-10'>
            <div className='w-[20%]'>
              <Sidenav/>
            </div>
            <div className='w-[80%]'>
              <h3 class="leading-normal text-lg text-gray-500 my-10">Add A New Product</h3>
              <div className='flex md:flex-row flex-col md:flex-nowrap flex-wrap md:justify-between justify-around gap-10'>
                  <div className='md:w-[50%] w-full'>
                      <div className='mb-4'>
                        <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Title
                        </label>
                        <input type='text' name='title' 
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' />
                      </div>
                      <div className='mb-4'>
                        <label for='brand' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Brand
                        </label>
                        <input type='text' name='brand' 
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' />
                      </div>
                      <div className='mb-4'>
                          <label for='categories' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                              Category
                          </label>
                          <select name='categories'
                              className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'>
                              <option value='men'>Men</option>
                              <option value='women'>Women</option>
                              <option value='kids'>Kids</option>
                              <option value='home'>Home Accessories</option>
                              <option value='electronic'>Electronic Accessories</option>
                              <option value='groceries'>Groceries</option>
                              <option value='health'>Health and Beayty</option>
                          </select>
                      </div>
                      <div className='mb-4'>
                          <label for='warranties' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                              Warranty Period
                          </label>
                          <select name='warranty'
                              className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'>
                              <option value='none'>
                                  None
                              </option>
                              <option value='6mo'>
                                  6 months
                              </option>
                              <option value='1y'>
                                  1 Year
                              </option>
                          </select>
                      </div>
                      <div className='mb-4'>
                          <label for='image' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                              Image
                          </label>
                          <input type='file' name='image'
                              className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'/>
                      </div>    
                  </div>
                  <div className='md:w-[50%] w-full'>
                      <div className='mb-4'>
                        <label for='price' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Price
                        </label>
                        <input type='number' name='price' 
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' />
                      </div>
                      <div className='mb-4'>
                        <label for='quantity' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Quantity
                        </label>
                        <input type='number' name='quantity' 
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' />
                      </div>
                      <div className='mb-4'>
                        <label for='description' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Description
                        </label>
                        <textarea name="description" rows="5"
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'>
                        </textarea>
                      </div>
                      <button type="submit"
                          className='inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal float-right text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs hover:shadow-xs hover:-translate-y-px active:opacity-85'>
                          Submit
                      </button>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductAdd