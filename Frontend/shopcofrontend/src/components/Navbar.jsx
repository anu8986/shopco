import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuFoldFill } from "react-icons/ri"
import { FaShoppingCart } from "react-icons/fa";
import Shopco from "../assets/shopcologo"
import { MdClose } from "react-icons/md";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../App.css";
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Input from './Input';
import Profile from '../Pages/Profile';

const Navbar = () => {
    const navigate = useNavigate()
    const [showmenu, setShowMenu] = useState(false)
    const [showprofile, setShowprofile] = useState(false)
    // const navigate = useNavigate();
    const handlelogout = () => {
        navigate('/')
        localStorage.clear()
    }
    const handelshowmenu = () => {
        setShowMenu(!showmenu)
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const options = [
        { key: 'Mens', value: 'Mens' },
        { key: 'Womens', value: 'Womens' },
        { key: 'Kids', value: 'Kids' },
        { key: 'Brands', value: 'Brands' },
        { key: 'NewArrivals', value: 'New Arrivals' },
        { key: 'Offers', value: 'Offers' },
        { key: 'Shop', value: 'Shop' },
    ];


    return (
        <nav className="navbar">
            <div className="container Navbarcontainer">
                {/* Logo */}
                <div className="logo">
                    <Shopco />
                </div>

                {/* Menu */}
                <ul className="menulist fs-6 ">
                    <li className="dropdown ">
                        <span>
                            <Link className="menu-link">Shop</Link>
                            <IoIosArrowDown className="arrow-icon" />
                        </span>
                        <ul className="menudropdown">
                            <li className="submenulist"><Link to="/Menscollection">Mens</Link></li>
                            {/* <li className="submenulist"><Link to="/Womencollection">Total Purchase</Link></li> */}
                            <li className="submenulist"><Link to="/Kidscollection">Kids</Link></li>
                            <li className="submenulist"><Link to="/Offers">Offers</Link></li>
                        </ul>
                    </li>
                    <li><Link className="menu-link" to="/Newarraivels">New Arrivals</Link></li>
                    <li><Link className="menu-link" to="/Brands">Brands</Link></li>
                    <li><Link className="menu-link" to="/TotalPurchase">Total Purchase</Link></li>

                </ul>


                <div className='inputcontainer'>
                    <Input
                        type="text"
                        placeholder="Search"
                        options={options}
                    />
                </div>

                <div className='d-flex gap-2'>

                    {/* smallscreen  */}
                    <div className='sidemenu'>
                        <button onClick={handelshowmenu} className='sidemenuicon'>
                            <RiMenuFoldFill />
                        </button>


                        {showmenu && (
                            <div className='sidemenucontainer'>
                                <div className='closebtncontainer'>
                                    <Shopco />
                                    <button onClick={handelshowmenu} className='sidemenuicon'>
                                        <MdClose />
                                    </button>
                                </div>


                                <div>
                                    <ul className=" sidemenulist">
                                        <li><Link className="menu-link" to="/Menscollection">Mens</Link></li>
                                        <li><Link className="menu-link" to="/Newarraivels">New Arrivals</Link></li>
                                        {/* <li><Link className="menu-link" to="/brands">Brands</Link></li> */}
                                        <li onClick={handlelogout}>Log out</li>
                                    </ul>
                                </div>

                            </div>
                        )}
                    </div>
                    <div className='sidemenuicon'>
                        <button onClick={()=>navigate('/Addtocarts')}>
                        <FaShoppingCart />

                        </button>
                    </div>
                    <div className='avatar-container'>
                        <button className='avatar' onClick={() => setShowprofile(!showprofile)}>
                            <Avatar
                                alt={storedUser.data.Name}
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                            />

                        </button>
                        {showprofile && (
                            <div className='profile-card'>
                                <Profile user={storedUser.data} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
