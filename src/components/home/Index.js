import React from 'react'
import Sidenav from '../Sidenav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='container'>
          <div className='flex gap-10'>
            <div className='w-[20%]'>
              <Sidenav/>
            </div>
            <div className='w-[80%]'>
              <div className="w-full px-6 py-6 mx-auto">
                  <div className="flex flex-wrap">
                    <Link to="/products/list" className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
                          <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                <div>
                                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase">Total Products</p>
                                  <h5 className="mb-2 font-bold dark:text-white">100</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </Link>
                    <Link to="/customers/list" className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                          <div className="flex flex-row -mx-3">
                            <div className="flex-none w-2/3 max-w-full px-3">
                              <div>
                                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase">Total Customers</p>
                                <h5 className="mb-2 font-bold dark:text-white">10</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/orders/list"  className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                          <div className="flex flex-row -mx-3">
                            <div className="flex-none w-2/3 max-w-full px-3">
                              <div>
                                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase">Total Orders</p>
                                <h5 className="mb-2 font-bold dark:text-white">6</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home