import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { useParams } from 'react-router-dom'

const Detail = () => {
  let [user, setUser] = useState([]);
  let [error, setError] = useState("");

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    )
        .then((response) => response.json())
        .then(
            (result) => {
              setUser(result);
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
              <h3 class="leading-normal text-lg text-gray-500 my-10">Customer Details</h3>
              <div className='flex md:flex-row flex-col md:flex-nowrap flex-wrap md:justify-between justify-around gap-10'>
                  <div className='md:w-[50%] w-full'>
                      <div className='mb-4'>
                        <label for='title' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Name
                        </label>
                        <input type='text' name='title' 
                          value={user.name}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='brand' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Username
                        </label>
                        <input type='text' name='brand' 
                          value={user.username}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='brand' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Email
                        </label>
                        <input type='text' name='brand' 
                          value={user.email}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      <div className='mb-4'>
                        <label for='discount' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Website
                        </label>
                        <input type='text' name='discount' 
                          value={user.website}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>    
                  </div>
                  <div className='md:w-[50%] w-full'>
                      <div className='mb-4'>
                        <label for='price' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                          Phone
                        </label>
                        <input type='text' name='price' 
                          value={user.phone}
                          className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none'
                          readOnly />
                      </div>
                      {user.address &&
                      <>
                      <div className='flex gap-3'>
                        <div className='mb-4 w-[50%]'>
                          <label for='quantity' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Street
                          </label>
                          <input type='text' name='quantity' 
                            value={JSON.stringify(user.address.street)}
                            className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' 
                            readOnly/>
                        </div>
                        <div className='mb-4 w-[50%]'>
                          <label for='quantity' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Suite
                          </label>
                          <input type='text' name='quantity' 
                            value={JSON.stringify(user.address.suite)}
                            className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' 
                            readOnly/>
                        </div>
                      </div>
                      <div className='flex gap-3'>
                        <div className='mb-4 w-[50%]'>
                          <label for='quantity' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            City
                          </label>
                          <input type='text' name='quantity' 
                            value={JSON.stringify(user.address.city)}
                            className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' 
                            readOnly/>
                        </div>
                        <div className='mb-4 w-[50%]'>
                          <label for='quantity' className='inline-block mb-2 ml-1 font-bold text-xs text-slate-700'>
                            Zipcode
                          </label>
                          <input type='text' name='quantity' 
                            value={JSON.stringify(user.address.zipcode)}
                            className='focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none focus:border-blue-500 focus:outline-none' 
                            readOnly/>
                        </div>
                      </div>
                      </>
                      }
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Detail