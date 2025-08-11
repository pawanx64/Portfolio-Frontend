import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Admin = () => {
  const [Password, setPassword] = useState('');
  const [Log, setLog] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get('https://port-folio-backend-phi.vercel.app/getcontacts')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogin = () => {
    if (Password === process.env.REACT_APP_PASSWORD) {
      setLog(true);
    } else {
      toast.error('Incorrect Password 😔', {
        position: 'bottom-center',
        autoClose: 2500,
        theme: 'colored',
      });
    }
  };

  const handleLogout = () => {
    setLog(false);
    setPassword('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <ToastContainer position="top-center" autoClose={2500} theme="colored" />
      <Navbar />
       <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
      <div className="flex flex-grow items-center justify-center p-6">
        {Log ? (
          <div
            data-aos="zoom-in"
            className="w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              📋 Contact Submissions
            </h2>

            {/* Responsive Table */}
            <div className="hidden md:grid grid-cols-4 gap-2 text-center bg-white/10 font-semibold rounded-lg overflow-hidden">
              <div className="p-4">First</div>
              <div className="p-4">Last</div>
              <div className="p-4">Email</div>
              <div className="p-4">Message</div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:grid grid-cols-4 gap-2 text-center">
              {data &&
                data.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="p-4 border-b border-white/10">{item.First}</div>
                    <div className="p-4 border-b border-white/10">{item.Last}</div>
                    <div className="p-4 border-b border-white/10">{item.Email}</div>
                    <div className="p-4 border-b border-white/10">{item.Message}</div>
                  </React.Fragment>
                ))}
            </div>

            {/* Mobile Card View */}
            <div className="space-y-4 md:hidden">
              {data &&
                data.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg"
                  >
                    <p>
                      <span className="font-bold">First:</span> {item.First}
                    </p>
                    <p>
                      <span className="font-bold">Last:</span> {item.Last}
                    </p>
                    <p>
                      <span className="font-bold">Email:</span> {item.Email}
                    </p>
                    <p>
                      <span className="font-bold">Message:</span> {item.Message}
                    </p>
                  </div>
                ))}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
              >
                🚪 Log Out
              </button>
            </div>
          </div>
        ) : (
          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 w-full max-w-md"
          >
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              🔑 Admin Login
            </h2>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the Password"
              className="w-full p-4 mb-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-transparent focus:border-cyan-400 outline-none"
            />
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 font-semibold"
            >
              🚀 Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
