import React, { useState } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
// IMPORT IMAGE
import { PiDotsNineBold } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
//import { FaBrush } from "react-icons/fa6";
import Image1 from '../images/Logo.png';

function Navbar() {

    const [active, setActive] = useState('meanu')

    // Function to toggile navBar
    const showNavbar = () => {
        setActive('meanu activeMeanu')
    }

    // Function to remove navBar
    const removeNavbar = () => {
        setActive('meanu')
    }

    return (
        <div className='navbar-second'>
            <Container>
                <div className='navbar-second-content'>
                    <div className='logo-Div'>
                        {/* <SiTreehouse className='logo-nav' /> */}
                        <img src={Image1} alt="" style={{ width: '46px', height: '46px', color: '#fff' }} />
                        <div style={{display:'flex' , flexDirection:'column'}}>
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#0796EF' }}>DEEP <span style={{color:'#fff'}}> NET </span></span>
                            <span style={{ color: '#857878' , fontSize:'14px' , fontWeight:'700'}}> SOFT </span>
                        </div>
                    </div>                       
                    <div className={active}>
                        <ul className='nav-Links'>
                            <Link to='/' className='nav-link'>HOME</Link>
                            <Link to='/' className='nav-link'>MENU</Link>
                            {/* <Link to='/protectedPage' className='nav-link'>Protected Page</Link> */}
                            <Link to='/' className='nav-link nav-link-sign'>MAKE A RESERVATION</Link>
                            <Link to='/' className='nav-link'>CONTACT US </Link>
                        </ul>
                        {/* icon to close navbar on small devices */}
                        <AiFillCloseCircle className='closeIcon img-nav' onClick={removeNavbar} />
                    </div>
                    {/* <div className='inputDiv-nav'>
                        <input type="text" placeholder='What are you looking for?' />
                    </div> */}
                    {/*<div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to='/shoppingCart'><FaShoppingCart style={{ width: '24px', height: '24px', color: '#fff' }} /></Link>
                    </div>*/}
                    <div className='meanuIcon-Div'>
                        <PiDotsNineBold className='meanuIcon img-nav' onClick={showNavbar} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
