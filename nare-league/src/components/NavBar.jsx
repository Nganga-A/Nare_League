import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/solid'; // Import Heroicons for icons
import logo from '../../src/Assests/Images/logo-white.webp'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="bg-slate-200 z-10 dark:bg-black shadow-md fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link to="/">
                            <img className=" w-auto h-8" src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className=" sm:ml-6 sm:flex sm:space-x-8">
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
