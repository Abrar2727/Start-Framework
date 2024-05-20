import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <div>
                <header className='fixed top-0 right-0 left-0' style={{backgroundColor:"#2c3e50"}}>
                    <nav className='flex justify-between py-8 container mx-auto text-white'>
                        <NavLink to="/">
                        <h1 className='text-3xl font-bold'>START FRAMEWORK</h1>
                        </NavLink>
                        <ul className='flex gap-12'>
                        <li className=' font-bold text-1xl cursor-pointer tracking-wider'>
                                <NavLink className={({ isActive }) => isActive ? "bg-teal-400 py-2 px-2 rounded-md" : ""} to="/About">About</NavLink>
                            </li>
                            <li className=' font-bold text-1xl cursor-pointer'>
                                <NavLink className={({ isActive }) => isActive ? "bg-teal-400 py-2 px-2 rounded-md" : ""}  to="/Portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className=' font-bold text-1xl cursor-pointer'>
                                <NavLink className={({ isActive }) => isActive ? "bg-teal-400 py-2 px-2 rounded-md" : ""} to="/Register">CONTACT</NavLink>
                            </li>
                         

                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}

