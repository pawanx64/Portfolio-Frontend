import React, { useState } from 'react'
import { Navbar } from './Navbar'
import image3 from './Assests/img7.png';
import  axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {


        


        const [First,setFirst]=useState('');
        const [Last,setLast]=useState('');
        const [Email,setEmail]=useState('');
        const [Message,setMessage]=useState('');
        axios.defaults.withCredentials=true;
        const handleSubmit=async(event)=>{
                event.preventDefault();
                if(First=== '' || Last=== '')
                {
                        toast.error('Enter Valid Name😔', {
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
                else if(Email==='' || !Email.includes('@'))
                {
                        toast.error('Enter Valid Email😔', {
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
                else if(Message==='')
                {
                        toast.error('Enter A valid Reason To Connect😔', {
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
                else{
                        try{
                                await axios.post('https://port-folio-backend-phi.vercel.app/CreateContact',{
                                     First:First,
                                     Last:Last,
                                     Email:Email,
                                     Message:Message,
                                });
                                toast.success('Thanks for your response😊', {
                                        position: "bottom-center",
                                        autoClose: 2500,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                });
                                setFirst('')
                                setLast('')
                                setEmail('')
                                setMessage('')
                             }
                        catch(error){
                                console.log(error);
                                toast.error('Error occurred while submitting the form🙏');
                        }
                }
        
      }
      
        
  return (
    <div>
        <Navbar/>
        <div  data-aos="zoom-in"  className=' overflow-x-hidden min-h-screen  flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8'>                                 
                <div className='h-fit flex flex-wrap p-10 m-20 rounded-xl flex-col-reverse gap-10 lg:flex-row'>
                        <div className='h-fit w-fit flex flex-wrap justify-between items-center flex-col'>
                                <div className=' text-white font-serif text-5xl font-semibold'>
                                        Contact Us
                                </div>
                                <div className='p-10  rounded-2xl '>        
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
                                                theme="colored"/>
                                        <div className='flex flex-wrap justify-center gap-5 sm:gap-1'> 
                                                <input  type="text"  value={First} onChange={(event)=>setFirst(event.target.value)}  placeholder="First Name" className=' bg-slate-200 outline-none font-mono  font-semibold border-2 p-4 w-80 sm:w-40 h-12  rounded-xl hover:text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950'/>
                                                <input  type="text" value={Last} onChange={(event)=>setLast(event.target.value)} placeholder="Last Name" className=' bg-slate-200 outline-none font-mono font-semibold border-2 p-4 w-80 sm:w-40 h-12 rounded-xl hover:text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950'/>
                                        </div>
                                        <div className='flex flex-wrap justify-center pt-5'>
                                                <input  type="email" value={Email} onChange={(event)=>setEmail(event.target.value)}  placeholder="Email" className=' bg-slate-200 outline-none font-mono font-semibold border-2 w-80 rounded-xl p-4 hover:text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950'/>
                                        </div>
                                        <div className='flex flex-wrap justify-center pt-5'>
                                                <textarea  type="text" value={Message} onChange={(event)=>setMessage(event.target.value)}  placeholder="Message" className=' h-32 w-80 outline-none rounded-xl resize-none hover:text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950 font-mono font-semibold border-2 p-4 bg-slate-200'/>
                                        </div>
                                        <div className='flex flex-wrap justify-center pt-5'> 
                                                <button onClick={handleSubmit} className='  bg-slate-200 font-mono  w-80 font-semibold hover:text-white rounded-xl p-4 hover:bg-gradient-to-r from-pink-950 via-blue-700 to-purple-600 '>Send Me</button>
                                        </div>
                                </div>
                        </div>
                        <div className='flex flex-wrap justify-center flex-row items-center'>
                                <img src={image3} alt="logo" className='rounded-3xl z-10 w-72 h-72'/>
                        </div>
                </div>
                
        </div>
    </div>
  )
}
