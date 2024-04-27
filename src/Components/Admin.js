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
            <div className='flex flex-wrap justify-center items-center h-screen'>
                {Log ? (
                    <div className='flex sm:flex-col gap-10 flex-wrap justify-center items-center h-screen'>
                        <div className='w-fit'>
                                <div className='overflow-x-auto h-[400px] max-w-[800px] mx-auto'>
                                <div className="grid grid-cols-4 gap-0">
                                                <div className='p-4 border-2 flex justify-center items-center border-white text-white  max-w-[200px] overflow-auto font-bold'>First</div>
                                                <div className='p-4 border-2 flex justify-center items-center border-white text-white  max-w-[200px] overflow-auto font-bold'>Last</div>
                                                <div className='p-4 border-2 flex justify-center items-center border-white text-white  max-w-[200px] overflow-auto font-bold'>Email</div>
                                                <div className='p-4 border-2 flex justify-center items-center border-white text-white  max-w-[200px] overflow-auto font-bold'>Message</div>
        
                                                {data && data.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    <div className='p-4 border-2 flex justify-center items-center border-white text-white max-w-[200px] overflow-auto'>{item.First}</div>
                                                    <div className='p-4 border-2 flex justify-center items-center border-white text-white max-w-[200px] overflow-auto'>{item.Last}</div>
                                                    <div className='p-4 border-2 flex justify-center items-center border-white text-white max-w-[200px] overflow-auto'>{item.Email}</div>
                                                    <div className='p-4 border-2 flex justify-center items-center border-white text-white max-w-[200px] overflow-auto'>{item.Message}</div>
                                                </React.Fragment>
                                                ))}
                                </div>
                                </div>
                        </div>
                        <button onClick={handleLogout} className='bg-slate-200 font-mono  w-80 font-semibold hover:text-white rounded-xl p-4 hover:bg-gradient-to-r from-pink-950 via-blue-700 to-purple-600'>Log Out</button>
                    </div>
                    
                ):(
                    <div className='flex flex-col gap-10 '>
                        <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter The Password' className='bg-slate-200 font-mono  w-80 font-semibold hover:text-white rounded-xl p-4 hover:bg-gradient-to-r from-pink-950 via-blue-700 to-purple-600'/>
                        <button onClick={handleLogin} className='bg-slate-200 font-mono  w-80 font-semibold hover:text-white rounded-xl p-4 hover:bg-gradient-to-r from-pink-950 via-blue-700 to-purple-600'>Log In</button>
                    </div>
                )}
            </div>
    </div>
  )
}