import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ProductList = () => {

  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");

  useEffect(() => {
    fetch(
      'https://dummyjson.com/products?limit=10'
    )
        .then((response) => response.json())
        .then(
            (result) => {
              setProducts(result.products);
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
              <div className='flex items-center justify-between block w-full p-0 my-4 overflow-y-auto bg-white border-0 shadow-xl z-990 rounded-2xl'>
                <table className='items-center w-full mb-0 align-top border-collapse text-slate-500'>
                <thead className='align-bottom'>
                  <tr>
                    <th className='px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Title
                    </th>
                    <th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Price
                    </th>
                    <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Category
                    </th>
                    <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Quantity
                    </th>
                    <th className='px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                {products && products.map((item,i)=>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div>
                          <img src={item.thumbnail}
                           className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal">{item.title}</h6>
                          <p className="mb-0 text-xs leading-tight text-slate-400">{item.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs font-semibold leading-tight">{item.price}</p>
                      <p className="mb-0 text-xs leading-tight text-slate-400">discount: {item.discountPercentage}%</p>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs font-semibold leading-tight capitalize">{item.category}</p>
                    </td>
                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="text-xs font-semibold leading-tight text-slate-400">
                        {item.stock}
                      </p>
                      <p className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold leading-none text-white">
                        active
                      </p>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <div className='flex gap-[4px] justify-center'>
                        <Link to={`/products/${item.id}/`} className="text-md font-semibold leading-tight text-green-400"> 
                          <BiShow/>
                        </Link>  
                        <Link to={`/products/${item.id}/`} className="text-md font-semibold leading-tight text-blue-400"> 
                          <AiFillEdit/>
                        </Link>
                        <Link to={`/products/${item.id}/`} className="text-md font-semibold leading-tight text-red-400"> 
                          <AiFillDelete/>
                        </Link>
                      </div>
                    </td>
                  </tr>
                )} 
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductList