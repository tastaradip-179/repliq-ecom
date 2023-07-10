import React from 'react'
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineShop, AiOutlineNotification, AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidenav = () => { 

  return (
    <>
    <aside className='flex flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto bg-white border-0 shadow-xl z-990 rounded-2xl'
     aria-expanded='false'>
        <div className='h-19'>
            <Link to="/" target="_blank"
                className="block px-8 py-6 m-0 text-lg font-semibold whitespace-nowrap text-slate-700"> 
                REPLIQ ECOM
            </Link>
        </div>
        <div className='items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full'>
            <ul className='flex flex-col pl-0 mb-6'>
                <li className='mt-0.5 w-full'>
                    <Link className='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4'
                     to="/home">
                        <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                            <AiOutlineDashboard/>
                        </div>
                        <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                            Dashboard
                        </span>
                    </Link>
                </li>
                <li className='mt-0.5 w-full'>
                    <Link className='py-2.7 bg-blue-500/13 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700'
                     to="/products/list">
                        <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                            <AiOutlineShop/>
                        </div>
                        <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                            Products
                        </span>
                    </Link>
                    <ul className='flex flex-col pl-20 mb-0'>
                        <li className='mt-0.5 w-full'>
                            <Link className='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4'
                            to="/products/add">
                                <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                                    <AiOutlinePlus/>
                                </div>
                                <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                                    Add
                                </span>
                            </Link>
                        </li>
                        <li className='mt-0.5 w-full'>
                            <Link className='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4'
                            to="/products/list">
                                <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                                    <AiOutlineUnorderedList/>
                                </div>
                                <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                                    All
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='mt-0.5 w-full'>
                    <Link className='py-2.7 bg-blue-500/13 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700'
                     to="/customers/list">
                        <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                            <FiUsers/>
                        </div>
                        <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                            Customers
                        </span>
                    </Link>
                    <ul className='flex flex-col pl-20 mb-0'>
                        <li className='mt-0.5 w-full'>
                            <Link className='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4'
                            to="/customers/list">
                                <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                                    <AiOutlineUnorderedList/>
                                </div>
                                <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                                    All
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='mt-0.5 w-full'>
                    <Link className='py-2.7 bg-blue-500/13 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700'
                     to="/orders/list">
                        <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                            <AiOutlineNotification/>
                        </div>
                        <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                            Orders
                        </span>
                    </Link>
                    <ul className='flex flex-col pl-20 mb-0'>
                        <li className='mt-0.5 w-full'>
                            <Link className='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4'
                            to="/orders/list">
                                <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                                    <AiOutlineUnorderedList/>
                                </div>
                                <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>
                                    All
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
          </ul>
        </div>
    </aside>
    </>
  )
}

export default Sidenav