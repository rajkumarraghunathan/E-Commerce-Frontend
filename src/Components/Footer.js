import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='row pt-3' style={{ color: 'black', background: '#ffe26e' }}>
                <div className='col'>
                    <h4 className='fw-bold'>Help</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li>Shipping</li>
                        <li>Refund</li>
                        <li>FAQ</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='fw-bold'>Contact</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><FaPhoneAlt />+12 3456 789</li>
                        <li><IoIosMail />shop@ecommerce.com</li>
                        <li><FaLocationDot /> Addis Ababa, Bangalore</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='fw-bold'>Stay Connected</h4>
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                    <FaTelegram />
                </div>
            </div>
            <div className='' style={{ height: '30px', background: 'black', color: '#ffe26e' }}>
                ©2023 Shema Ltd. |
                | Terms & Condition |
                | Privacy Policy
            </div>
        </div>
    )
}

export default Footer
