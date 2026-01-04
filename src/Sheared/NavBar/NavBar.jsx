import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import "./navbar.css"
import { AuthContext } from '../../contexts/AuthContext';
import { BsListNested } from 'react-icons/bs';
const NavBar = () => {
    // useContexts
    const { user,userLogOut } = useContext(AuthContext)
    // log out
    const handleLogout = () => {
        userLogOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to={"/"}> <li className=' font-semibold'>Home</li> </NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><span className='text-blue-500 font-bold'>JOB</span>Hunter</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={"/"}> <li className='text-xl font-semibold'>Home</li> </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogout} className='btn bg-red-500'>Log Out</button> : <NavLink to={"/login"}><button className="btn bg-blue-500">Log in</button></NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;