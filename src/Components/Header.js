import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { GiSpiderWeb } from "react-icons/gi";
import { PiWebhooksLogoBold } from "react-icons/pi";
import Cookies from 'js-cookie';
import API_URL from '../API/Api';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {

    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)
    const [productName, setProductName] = useState('')
    const [isAdded, setIsAdded] = useState(true);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const cookies = Cookies.get();
        let role = cookies.role;
        if (!cookies.accessToken) {
            return setShowButton(true);
        }
        else {
            if (role === 'Admin') {
                setIsAdmin(false)
            }
            setShowButton(false);
        }
    }, []);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleSearchProduct = async (data) => {
        await axios.get(`${API_URL}/getProduct`, {
            data: { productName },
            withCredentials: true,
            // headers: {
            //     cookies: accessToken,
            //     role: role
            // },
        }).then((response) => {
            setIsAdded(false);
            if (response.data.message === 'Products have been retrieved successfully.') {
                return toast(`${response.data.data.productName} `)
            }
            toast('No Product found')

        }).catch(error => {
            setIsAdded(false);

            // if (error.response.data.message === 'Admin Resource. Access Denied!') {
            toast(error.response.data.message)

            // }
            console.log(error);
        })
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleLogout = async () => {
        const accessToken = Cookies.get('accessToken');

        await axios.get(`${API_URL}/logout`,
            {
                headers: {
                    cookies: accessToken,
                },
                withCredentials: true
            }).then((response) => {
                const redirectUrl = response.data.redirectUrl;
                if (response.data.message === 'User signed-out!') {
                    Cookies.remove('accessToken');
                    Cookies.remove('role')
                    setShowButton(true);

                    navigate(redirectUrl)
                }
            }).catch(error => console.log(error));

    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" style={{ textDecoration: "none" }}><h2>YEEZY<PiWebhooksLogoBold /> </h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            </li>
                            {isAdmin ? (<></>) : (<li className="nav-item px-2">
                                <Link className='px-2' to="/AddProduct" style={{ textDecoration: "none" }}>Add Product</Link>
                                <Link to="/Admin_Home_Page" style={{ textDecoration: "none" }}>DashBoard</Link>
                            </li>)}
                            <li className="nav-item px-2 ms-5">
                                <form className="d-flex">
                                    <input className="form-control inputBox"
                                        value={productName}
                                        onChange={e => setProductName(e.target.value)}
                                        type="search"
                                        placeholder="Search a product......."
                                        aria-label="Search" />
                                    <button className="btn btn btn-success searchButton"
                                        type="submit"
                                        onSubmit={(data) => { handleSearchProduct(data) }}>
                                        Search
                                    </button>
                                </form>
                            </li>
                        </ul>
                        <form className='me-2'>
                            <button type='button' onClick={() => navigate('/cart')} className='btn btn-outline-warning '><AiOutlineShoppingCart /></button>
                        </form>
                        <div>
                            {showButton ? (<button className='btn btn-success'> <Link to="/Login" className='text-white' style={{ textDecoration: "none" }}>Login</Link></button>) :
                                (<button className='btn btn-danger' onClick={handleLogout}>Logout</button>)}
                            {isAdded ? null : (<ToastContainer />)}
                        </div>
                        <div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header