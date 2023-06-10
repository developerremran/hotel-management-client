import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUserAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 pt-3 pb-3 px-5">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-5xl italic">Bistro Boss</a>
                </div>
                <div className="flex-none">
                    <ul className="menu items-center menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact-us'>Contact Us</Link></li>
                        <li><Link to='/dashBoard'>DashBoard</Link></li>
                        <li><Link to='/our-menu'>Our Menu</Link></li>
                        <li><Link to='/our-shop'>Our Shop</Link></li>
                        <li><Link to='/our-shop'>Cary</Link></li>
                       
                        <li><Link to='/our-shop'>Sign in</Link></li>
                        <FaUserAlt className='text-2xl font-bold'></FaUserAlt>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;