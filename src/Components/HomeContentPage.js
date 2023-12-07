import React from 'react'
import { Link } from 'react-router-dom'
// import Combined from './Combined'

const HomeContentPage = () => {
    return (
        <div>


            <div className='bg-dark text-light'>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link active text-light" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light" to='/Shop_Page' >Shop</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light" to='/Mens' >Mens</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light" to='/Women'>Women</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-light" to='/Kids'>Kids</Link>
                    </li>
                </ul>
            </div>
            {/* <Combined /> */}
        </div>
    )
}

export default HomeContentPage
