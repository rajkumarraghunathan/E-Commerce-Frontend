import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Action/Action";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { FaRupeeSign } from 'react-icons/fa';
import Header from './Header';
// import PaymentForm from './Payement/Payement';


const Cart = () => {

    const dispatch = useDispatch();



    const products = useSelector((store) => store);
    // const currentDate = new Date();

    const [dataQuantity, setDataQuantity] = useState(1);
    // const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    // const [selectedEndDate, setSelectedEndDate] = useState(new Date(currentDate.getTime() + 60 * 60 * 1000));

    // const startTime = selectedStartDate.getTime();
    // const endTime = selectedEndDate.getTime();
    // const timeDifference = Math.abs(endTime - startTime);
    // const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    // const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // const isSeconds = timeDifference / 1000

    const handleInputChange = (event) => {
        setDataQuantity(event.target.value);
    };

    // var amount;

    return (
        <>
            <Header />
            <div className='bg-dark' style={{ height: '100vh' }}>
                <h1 className='text-light'>Welcome to the Cart</h1>
                <div className='container d-flex flex-wrap justify-content-center py-5 '>

                    {
                        products.length ?
                            (products.map((data, index) => {
                                return (

                                    <div className='p-2' key={index}>

                                        <div className="card p-2" style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                                            <img src={data.productImage} className="card-img-top" alt="Sample" placeholder='Enter the Quanity' style={{ height: '12rem' }} />

                                            <div className="card-body row">
                                                <div className='col' >
                                                    <p>{data.productName}</p>
                                                    <p><FaRupeeSign />{data.productPrice}</p>

                                                    <p>Qty: <input
                                                        type="text"
                                                        className="form-control text-center inputBox"
                                                        value={dataQuantity}
                                                        onChange={handleInputChange} />
                                                    </p>


                                                    <div className='my-2'>Total Price: <FaRupeeSign />
                                                        {amount = data.productPrice * dataQuantity}
                                                    </div>

                                                </div>

                                                {/* 
                                            <div className='d-flex justify-content-center'>
                                                <DatePicker
                                                    className='text-center date '
                                                    selected={selectedStartDate}
                                                    onChange={(date) => setSelectedStartDate(date)}
                                                    showTimeInput
                                                    timeInputLabel="Time:"
                                                    dateFormat="MMMM d, yyyy h:mm:ss aa"

                                                />
                                                <DatePicker
                                                    className='text-center date'
                                                    selected={selectedEndDate}
                                                    onChange={(date) => setSelectedEndDate(date)}
                                                    showTimeInput
                                                    timeInputLabel="Time:"
                                                    dateFormat="MMMM d, yyyy h:mm:ss aa"

                                                />
                                            </div> */}

                                                <div className='mt-2'>
                                                    <button
                                                        type='button'
                                                        className='btn btn-primary px-5 py-2'
                                                        onClick={() => { dispatch(removeFromCart(data)) }}>
                                                        <AiFillDelete />
                                                    </button>
                                                </div>

                                                <div className='d-grid p-3'>
                                                    {/* <PaymentForm passedValue={amount} productPassed={products} /> */}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : (<div><h3 style={{ color: "red" }}>Cart is Empty</h3></div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Cart