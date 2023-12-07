import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Combined = () => {
    return (
        <div className='container py-4'>
            <div className='row w-100 min-vh-100 m-auto '>
                <h1>Latest Fashion Collections</h1>

                <div className='col mb-2'>
                    <div class="card " style={{ width: "18rem" }}>
                        <img src="https://shema-backend.vercel.app/public/men/images-1661697129697.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">
                                <p className='fw-bold'>Versace</p>
                                <p>Odissea chunky leather trainers</p>
                                <div className='row'>
                                    <p className='col '>
                                        <FaRegHeart className='pointer' />
                                    </p>
                                    <p className='col fw-bold'>
                                        ₹699
                                    </p>
                                    <p className='col'>
                                        <IoMdCart className='pointer' />
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className='col mb-2'>
                    <div class="card " style={{ width: "18rem" }}>
                        <img src="https://shema-backend.vercel.app/public/men/images-1661721639781.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">
                                <p className='fw-bold'>Zegna</p>
                                <p>Lightweight blazer</p>
                                <div className='row'>
                                    <p className='col '>
                                        <FaRegHeart className='pointer' />
                                    </p>
                                    <p className='col fw-bold'>
                                        ₹1181
                                    </p>
                                    <p className='col'>
                                        <IoMdCart className='pointer' />
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className='col mb-2'>
                    <div class="card " style={{ width: "18rem" }}>
                        <img src="https://shema-backend.vercel.app/public/women/images-1661733798343.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">
                                <p className='fw-bold'>Valentino</p>
                                <p>Straight-leg jeans</p>
                                <div className='row'>
                                    <p className='col '>
                                        <FaRegHeart className='pointer' />
                                    </p>
                                    <p className='col fw-bold'>
                                        ₹1999
                                    </p>
                                    <p className='col'>
                                        <IoMdCart className='pointer' />
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className='col mb-2'>
                    <div class="card " style={{ width: "18rem" }}>
                        <img src="https://shema-backend.vercel.app/public/women/images-1661734130933.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">
                                <p className='fw-bold'>Balenciaga</p>
                                <p>Twisted-sleeve jacket</p>
                                <div className='row'>
                                    <p className='col '>
                                        <FaRegHeart className='pointer' />
                                    </p>
                                    <p className='col fw-bold'>
                                        ₹1181
                                    </p>
                                    <p className='col'>
                                        <IoMdCart className='pointer' />
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className='col mb-2'>
                    <div class="card " style={{ width: "18rem" }}>
                        <img src="https://shema-backend.vercel.app/public/kids/images-1661736021736.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">
                                <p className='fw-bold'>Stella Kids</p>
                                <p>Drawstring cargo track pants</p>
                                <div className='row'>
                                    <p className='col '>
                                        <FaRegHeart className='pointer' />
                                    </p>
                                    <p className='col fw-bold'>
                                        ₹699
                                    </p>
                                    <p className='col'>
                                        <IoMdCart className='pointer' />
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className='col mb-2'>
                    <div class="card " style={{ width: "18rem" }}>
                        <img src="	https://shema-backend.vercel.app/public/kids/images-1661736457211.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">
                                <p className='fw-bold'>Molo</p>
                                <p>Teen denim skirt</p>
                                <div className='row'>
                                    <p className='col '>
                                        <FaRegHeart className='pointer' />
                                    </p>
                                    <p className='col fw-bold'>
                                        ₹99
                                    </p>
                                    <p className='col'>
                                        <IoMdCart className='pointer' />
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className='p-3'>
                    <Link className='button' to='/Shop_Page' style={{ textDecoration: 'none' }}>Show more <FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Combined