import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav'
import { AiFillDelete } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const CustomerList = () => {

    let [customers, setCustomers] = useState([]);
    let [error, setError] = useState("");
  
    useEffect(() => {
      fetch(
        'https://jsonplaceholder.typicode.com/users'
      )
          .then((response) => response.json())
          .then(
              (result) => {
                setCustomers(result);
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
                        Name
                    </th>
                    <th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Email
                    </th>
                    <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Phone
                    </th>
                    <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Address
                    </th>
                    <th className='px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                {customers && customers.map((item,i)=>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div>
                          <img src="https://cdn1.iconfinder.com/data/icons/elevator/154/elevator-user-man-ui-round-login-1024.png"
                           className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                           alt="user1" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal">{item.name}</h6>
                          <p className="mb-0 text-xs leading-tight text-slate-400">{item.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs font-semibold leading-tight">{item.email}</p>
                      <p className="mb-0 text-xs leading-tight text-slate-400">{item.website}</p>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <span className="mb-0 text-xs font-semibold leading-tight">
                        {item.phone}
                      </span>
                    </td>
                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="text-xs font-semibold leading-tight text-slate-400 capitalize">
                        street: {JSON.stringify(item.address.street)}
                      </p>
                      <p className="text-xs font-semibold leading-tight text-slate-400 capitalize">
                        suite: {JSON.stringify(item.address.suite)}
                      </p>
                      <p className="text-xs font-semibold leading-tight text-slate-400 capitalize">
                        city: {JSON.stringify(item.address.city)}
                      </p>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <div className='flex gap-[4px] justify-center'>
                        <Link to={`/customers/${item.id}/`} className="text-md font-semibold leading-tight text-green-400"> 
                          <BiShow/>
                        </Link>  
                        <Link to={`/customers/${item.id}/`} className="text-md font-semibold leading-tight text-red-400"> 
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

export default CustomerList