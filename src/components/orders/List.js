import React, {useEffect, useState} from 'react'
import Sidenav from '../Sidenav'
import { AiFillDelete } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const OrderList = () => {

    let [orders, setOrders] = useState([]);
    let [error, setError] = useState("");
  
    useEffect(() => {
      fetch(
        'https://dummyjson.com/carts?limit=10'
      )
          .then((response) => response.json())
          .then(
              (result) => {
                setOrders(result.carts);
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
                        Customer
                    </th>
                    <th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Total Products
                    </th>
                    <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Total Price (in BDT)
                    </th>
                    <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Total Quantity
                    </th>
                    <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Discounted Total Price (in BDT)
                    </th>
                    <th className='px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {orders && orders.map((item,i)=>
                <tr>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                            <Link className="mb-0 text-sm leading-normal underline" to="/customers/1">
                                Id: {item.userId}
                            </Link>
                        </div>
                    </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">{item.totalProducts}</p>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight capitalize">{item.total}</p>
                    </td>
                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="text-xs font-semibold leading-tight text-slate-400">
                            {item.totalQuantity}
                        </p>
                    </td>
                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="text-xs font-semibold leading-tight text-slate-400">
                            {item.discountedTotal}
                        </p>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <div className='flex gap-[4px] justify-center'>
                        <Link to={`/orders/${item.id}/`} className="text-md font-semibold leading-tight text-green-400"> 
                        <BiShow/>
                        </Link>  
                        <Link to={`/orders/${item.id}/`} className="text-md font-semibold leading-tight text-red-400"> 
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

export default OrderList