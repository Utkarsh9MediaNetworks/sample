import React, { Component } from 'react';
import '../../assets/cart.scss';
import CartItem from './CartItem';
import PriceDetails from './PriceDetails'

class Cart extends React.Component{
    render(){

        return(
            <div className="cart-body">
                <div className="cart-section1">
                    <CartItem/>
                </div>
                <div className="cart-section2">
                    <PriceDetails/>
                </div>
            </div>
        )
    }

}


export default Cart