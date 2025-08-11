import React, { useState,useEffect } from 'react';
import { Navbar } from './Navbar';
import image3 from './Assests/img7.png';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
  const [First, setFirst] = useState('');
  const [Last, setLast] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!First || !Last) {
      return toast.error('Enter valid name 😔', { position: 'bottom-center', autoClose: 2500, theme: 'colored' });
    }
    if (!Email || !Email.includes('@')) {
      return toast.error('Enter valid email 😔', { position: 'bottom-center', autoClose: 2500, theme: 'colored' });
    }
    if (!Message) {
      return toast.error('Enter a valid reason to connect 😔', { position: 'bottom-center', autoClose: 2500, theme: 'colored' });
    }

    try {
      await axios.post('https://port-folio-backend-phi.vercel.app/CreateContact', {
        First,
        Last,
        Email,
        Message,
      });
      toast.success('Thanks for your response 😊', { position: 'bottom-center', autoClose: 2500, theme: 'colored' });
      setFirst('');
      setLast('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error('Error occurred while submitting the form 🙏');
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Navbar always stays on top */}
      <Navbar />
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
     

      {/* Main content with padding to avoid navbar overlap */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div
          data-aos="fade-up"
          className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-white/20 relative overflow-hidden"
        >
          {/* Glowing background effects */}
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/40 rounded-full blur-3xl animate-pulse" />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 relative z-10">
            {/* Left Image */}
            <div className="flex justify-center flex-shrink-0">
              <img
                src={image3}
                alt="Contact Illustration"
                className="rounded-3xl shadow-2xl w-60 h-60 sm:w-72 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Form */}
            <div className="flex-1 w-full">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
                Let’s Work Together
              </h1>
              <p className="text-gray-300 mb-6 sm:mb-8 text-center lg:text-left text-sm sm:text-base">
                Got a question, proposal, or just want to say hello? Drop me a message!
              </p>

              <ToastContainer />

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={First}
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder="First Name"
                    className="p-3 sm:p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-transparent focus:border-cyan-400 transition-all"
                  />
                  <input
                    type="text"
                    value={Last}
                    onChange={(e) => setLast(e.target.value)}
                    placeholder="Last Name"
                    className="p-3 sm:p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-transparent focus:border-cyan-400 transition-all"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="p-3 sm:p-4 w-full rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-transparent focus:border-cyan-400 transition-all"
                />

                {/* Message */}
                <textarea
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  className="p-3 sm:p-4 w-full h-28 sm:h-32 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-transparent focus:border-cyan-400 transition-all resize-none"
                />

                {/* Submit Button */}
                <div className="flex justify-center lg:justify-start">
                  <button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
                  >
                    Send Message 🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
