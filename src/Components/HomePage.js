import React from 'react'
// import Combined from './Combined'

const HomePage = () => {
    return (
        <div>
            <div className=' w-100' style={{ background: '#ffe26e' }}>
                <div className='d-flex'>
                    <div className='container '>
                        <div className='' style={{ marginTop: '25%' }}>
                            <h6 className="landing__header__discount ">UP TO 15% DISCOUNT</h6>
                            <h1 className="landing__header__main">Checkout The Best  Fashion Style</h1>
                            <button className='button'>Shop Now</button>
                        </div>
                    </div>
                    <div className='container' >
                        <div style={{ fontSize: '20px' }}>
                            <img className="landing__image" src="https://shemashop.vercel.app/static/media/men2.e2bb29b95d23d0e4e42f.png" alt="" />
                        </div>
                    </div>
                </div>
            </div >
            {/* <Combined /> */}
        </div>
    )
}

export default HomePage