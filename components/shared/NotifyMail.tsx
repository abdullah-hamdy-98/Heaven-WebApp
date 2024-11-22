"use client"
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notify() {
    const [email, setEmail] = useState('');

    const handleNotifyClick = () => {
        // Email validation regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            // Invalid email
            toast.error('Please enter a valid email address', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            // Valid email
            toast.success('Thank you! We will notify you as soon as possible', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="flex flex-col items-center mt-10">
            
            <div className="flex items-center lg:w-full max-w-md space-x-2">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 16"
                        >
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        id="input-group-1"
                        className="block pl-10 px-4 py-3 lg:w-full text-gray-1 lg:text-small-regular text-small-regular-mob rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-1"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-1 lg:text-small-regular text-small-regular-mob text-white lg:px-4 px-1.5 py-3 rounded-2xl hover:bg-dark-1 transform hover:scale-105 transition-transform duration-300 ease-in-outmax-h-4 "
                    onClick={handleNotifyClick}
                >
                    Notify Me
                </button>
            </div>

            <div className="flex items-center justify-center mt-6 space-x-4">
                <a
                    href="https://www.facebook.com/heavenagency0?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-1 text-Falinks-mob hover:text-blue transition duration-200"
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook fa-x"></i>
                </a>
                <a
                    href="https://www.instagram.com/heavenagency.eg?igsh=ajlqbTBoM2Q0dGdt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-1 text-Falinks-mob hover:text-pink-500 transition duration-200"
                    aria-label="Instagram"
                >
                    <i className="fab fa-instagram fa-x"></i>
                </a>
                <a
                    href="https://www.behance.net/heavenagency2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-1 text-Falinks-mob hover:text-black transition duration-200"
                    aria-label="Twitter"
                >
                    <i className="fa-brands fa-behance"></i>
                </a>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Notify;
