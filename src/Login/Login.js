import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { GiClick } from 'react-icons/gi';
import { TbHandClick } from 'react-icons/tb';
import API_URL from '../API/Api';



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(false);
        try {
            axios.post(`${API_URL}/login`, {
                email: email,
                password: password
            }).then((response) => {
                const token = response.data.token;
                const role = response.data.role;
                const redirectUrl = response.data.redirectUrl;
                Cookies.set('accessToken', token, { secure: true, sameSite: 'strict' }); // Store token in a secure cookie//
                Cookies.set('role', role, { secure: true, sameSite: 'strict' }); // Store token in a secure cookie//
                if (response.data.message === "User signed-in successfully.") {
                    if (role === "Admin") {
                        return navigate('/Admin_Home_Page')
                    }
                    if (role === "user") {
                        return navigate(redirectUrl)
                    }
                }
                else if (response.data.message === "Wrong User") {
                    setMessage('Wrong user')
                }
                else if (response.data.message === "Wrong Password") {
                    setMessage('Wrong Password')
                }
            })
                .catch((error) => {
                    setMessage('error')
                });
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(true);
        }


    }

    return (
        <div className='container-fluid' >
            <div className='d-flex justify-content-center align-items-center bg'>
                <div className="card dropdown-menu  card-design" >
                    <div className="card-body">

                        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                        <h1 className="pb-3" style={{ textAlign: "center", }}>LOGIN</h1>


                        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}


                        <form onSubmit={handleSubmit}>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control  color" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className="mb-4 pt-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control color" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}



                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className="mb-4 ">
                                If you have No Account?<Link to='/RegisterPage' className='ms-2 text-light'>Click<GiClick /></Link>
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className="mb-4">
                                Forget Password<Link to='/Forget-password' className='ms-2 text-light'>Click<GiClick /></Link>
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <div className="mb-4">
                                Shop Page<Link to='/' className='ms-2 text-light'>Click<GiClick /></Link>
                            </div>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            {isLoading ? (<div className='d-grid mb-3'>
                                <button type="submit" className="btn  submit-button" >Submit<TbHandClick /></button>
                            </div>
                            ) : (<div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>)}
                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}



                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <p className='text-center text-danger'>{message}</p>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login