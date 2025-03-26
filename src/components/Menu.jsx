import React from 'react';
import './menu.css';

import IMAGE1 from '../images/Rectangle 103.png';
import ProductList from './ProductList';


function Menu() {


    return (
        <div >

            <div className='img1Div'>

                <img src={IMAGE1} alt="" className='img1' />
                <div className='textDiv'>
                    <h1 className='menuHead'>MENU</h1>
                    <span className='text'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</span>
                </div>

            </div>



            <ProductList />


        </div>
    )
}

export default Menu
