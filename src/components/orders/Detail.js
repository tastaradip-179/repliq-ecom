import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { useParams } from 'react-router-dom'

const OrderDetail = () => {

    let [order, setOrder] = useState([]);
    let [error, setError] = useState("");
  
    const params = useParams();
  
    useEffect(() => {
      fetch(
        `https://dummyjson.com/carts/${params.id}`
      )
          .then((response) => response.json())
          .then(
              (result) => {
                setOrder(result);
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
              <h3 class="leading-normal text-lg text-gray-500 my-10">Order Details</h3>
              <div className='flex md:flex-row flex-col md:flex-nowrap flex-wrap md:justify-between justify-around gap-20'>
                  <div className='md:w-[40%] w-full'>
                    <div className='mb-4 text-center'>
                        <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Customer Id: {order.userId}
                        </label>
                        <img src="https://cdn1.iconfinder.com/data/icons/elevator/154/elevator-user-man-ui-round-login-1024.png"
                            alt="user" className='w-[120px] mx-auto'/>
                      </div>
                      <div className='mb-4'>
                        <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Total Price (in BDT)
                        </label>
                        <input type='text' name='title' 
                          value={order.total}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='brand' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Total Products
                        </label>
                        <input type='text' name='brand' 
                          value={order.totalProducts}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='discount' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Total Quantity
                        </label>
                        <input type='text' name='discount' 
                          value={order.totalQuantity}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='discount' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Discount Percentage
                        </label>
                        <input type='text' name='discount' 
                          value={order.discountedTotal}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>    
                  </div>
                  <div className='md:w-[60%] w-full'>
                      {order.products && order.products.map((item, i)=>(
                        <>
                        <h4 className='text-center text-gray-500 mb-4'>Product {i+1}</h4>
                        <div className='flex gap-3'>
                            <div className='mb-4 md:w-1/3 w-full'>
                                <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                                Title
                                </label>
                                <input type='text' name='title' 
                                value={item.title}
                                className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                                readOnly />
                            </div>
                            <div className='mb-4 md:w-1/3 w-full'>
                                <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                                Price
                                </label>
                                <input type='text' name='title' 
                                value={item.price}
                                className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                                readOnly />
                            </div>
                            <div className='mb-4 md:w-1/3 w-full'>
                                <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                                Quantity
                                </label>
                                <input type='text' name='title' 
                                value={item.quantity}
                                className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                                readOnly />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='mb-4 md:w-1/3 w-full'>
                                <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                                Total
                                </label>
                                <input type='text' name='title' 
                                value={item.total}
                                className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                                readOnly />
                            </div>
                            <div className='mb-4 md:w-1/3 w-full'>
                                <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                                Discount Percentage
                                </label>
                                <input type='text' name='title' 
                                value={item.discountPercentage}
                                className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                                readOnly />
                            </div>
                            <div className='mb-4 md:w-1/3 w-full'>
                                <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                                Discount Price
                                </label>
                                <input type='text' name='title' 
                                value={item.discountedPrice}
                                className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                                readOnly />
                            </div>
                        </div>
                        </>
                      ))}
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
    )
}

export default OrderDetail