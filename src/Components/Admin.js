import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Admin = () => {
    const[Password,setPassword]=useState([]);
    const[Log,setLog]=useState(false);
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('https://port-folio-backend-phi.vercel.app/getcontacts')
        .then((response)=>{
            setdata(response.data.data);
        })
        .catch(err=>console.log(err));
    },[])
    const handleLogin=()=>{
        
        if(Password===process.env.REACT_APP_PASSWORD)
        {
            setLog(true);
        }
        else{
            toast.error('Incorrect Password😔', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
               
        }
    }
    const handleLogout = () => {
        setLog(false);
        setPassword([]);
      };
  return (
    <div>
            <ToastContainer
                position="bottom-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Navbar/>
            <div className='flex flex-col justify-center items-center h-screen px-4'>
                {Log ? (
                    <div className='w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg'>
                        <div className='overflow-x-auto'>
                            <div className='grid grid-cols-4 gap-2 text-center bg-gray-700 font-bold text-white'>
                                <div className='p-4'>First</div>
                                <div className='p-4'>Last</div>
                                <div className='p-4'>Email</div>
                                <div className='p-4'>Message</div>
                                {data && data.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className='p-4 border-b border-gray-600'>{item.First}</div>
                                        <div className='p-4 border-b border-gray-600'>{item.Last}</div>
                                        <div className='p-4 border-b border-gray-600'>{item.Email}</div>
                                        <div className='p-4 border-b border-gray-600'>{item.Message}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <button 
                            onClick={handleLogout} 
                            className='mt-6 bg-gradient-to-r from-pink-950 via-blue-700 to-purple-600 text-white font-bold py-2 px-6 rounded-xl hover:scale-105 transform transition-transform duration-300'>
                            Log Out
                        </button>
                    </div>
                ) : (
                    <div className='flex flex-col gap-6'>
                        <input 
                            type="password" 
                            value={Password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder='Enter The Password' 
                            className='bg-gray-800 text-white font-semibold rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                        <button 
                            onClick={handleLogin} 
                            className='bg-gradient-to-r from-pink-950 via-blue-700 to-purple-600 text-white font-bold py-2 px-6 rounded-xl hover:scale-105 transform transition-transform duration-300'>
                            Log In
                        </button>
                    </div>
                )}
            </div>
    </div>
  )
}