import React from 'react';
import { Link, } from 'react-router-dom';
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

const Navbar = () => {
    const [showmenu, setShowMenu] = useState(false)
    // const navigate = useNavigate();

    const handelshowmenu = () => {
        setShowMenu(!showmenu)
        console.log('btn is clicked ')
    }

    return (
        <nav className="navbar">
            <div className="container Navbarcontainer">
                {/* Logo */}
                <div className="logo">
                    <Shopco />
                </div>

                {/* Menu */}
                <ul className="menulist ">
                    <li className="dropdown">
                        <span>
                            <Link  className="menu-link">Shop</Link>
                            <IoIosArrowDown className="arrow-icon" />
                        </span>
                        <ul className="menudropdown">
                            <li className="submenulist"><Link to="/Menscollection">Mens</Link></li>
                            <li className="submenulist"><Link to="/Womencollection">Womens</Link></li>
                            <li className="submenulist"><Link to="/Kidscollection">Kids</Link></li>
                            <li className="submenulist"><Link to="/Offers">Offers</Link></li>
                        </ul>
                    </li>
                    <li><Link className="menu-link" to="/Newarraivels">New Arrivals</Link></li>
                    <li><Link className="menu-link" to="/Brands">Brands</Link></li>
                </ul>


                <div className='inputcontainer'>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="standard-multiline-flexible"
                            label="search"
                            multiline
                            maxRows={4}
                            variant="standard"

                        />
                    </Box>
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
                                        <li><Link className="menu-link" to="/onsale">On Sale</Link></li>
                                        <li><Link className="menu-link" to="/newarrivals">New Arrivals</Link></li>
                                        <li><Link className="menu-link" to="/brands">Brands</Link></li>
                                        <li><Link className="menu-link" to="/login">Login</Link></li>
                                    </ul>
                                </div>

                            </div>
                        )}
                    </div>
                    <div className='sidemenuicon'>
                        <FaShoppingCart />
                    </div>
                    <button className='avatar'>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                    </button>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
