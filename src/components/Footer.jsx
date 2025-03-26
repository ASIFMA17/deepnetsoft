import React from 'react';
import './footer.css';
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

import IMAGE1 from '../images/Logo.png';

function Footer() {
    return (
        <>
            <div className='totalFooterDiv'>
                <div className='foot1Div'>

                    <div className='footerBox'>
                        <span className='footerHead'> CONNECT WITH US  </span>
                        <span className='footerText'> <FiPhone className='footerIcon' /> +91 9567843340</span>
                        <span className='footerText'> <CiMail className='footerIcon' /> info@deepnetsoft.com</span>
                    </div>

                    <div className='centerBox box-2'>
                        <div className='headDiv'>
                            <span className='headDeep'>DEEP</span>
                            <span className='headNet'>NET</span>
                            <span className='headSoft'>SOFT</span>
                        </div>

                        <div className='logoDiv'>
                            <img src={IMAGE1} alt="" className='logo' style={{ width: '56px', height: '56px' }} />
                        </div>

                        <span></span>

                    </div>

                    <div className='footerBox'>
                        <span className='footerHead'> FIND US </span>
                        <span className='footerText'> <CiLocationOn className='locIcon' /> First floor, Geo infopark, <br /> Infopark EXPY, Kakkanad</span>
                    </div>

                </div>


            </div>
            <div className='footerbottomDiv' style={{backgroundColor:'#121618'}}>
                <span className='footerbottomText'>© 2024 Deepnetsoft Solutions. All rights reserved.</span>
                <span className='footerbottomText'> Terms & Conditions</span>
            </div>


        </>
    )
}

export default Footer
