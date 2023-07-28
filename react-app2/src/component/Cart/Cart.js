import React, { useContext, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/item1.png'
import cardContext from '../store/cardContext';
import CartDetial from './CartDetial';
import Checkout from './Checkout/Checkout';
const Cart = () => {

    const ctx = useContext(cardContext);

    const [showDetials,setShowDetials]=useState(false);
    const [showCheckout,setShowCheckout]=useState(false)

    const showDetialsHandler = () =>{
        if(ctx.totalAmount === 0) return;
        // setShowDetials(!showDetials)
        setShowDetials(prevState => !prevState)

    }

    const showCheckoutHandler = ( )=> {
        if(ctx.totalAmount === 0) return;
        setShowCheckout(true)

    }

    const hideCheckoutHandler = () =>{

        setShowCheckout(false)

    }

    return (
        <div className={classes.Cart} onClick={showDetialsHandler}>
           
           
          {showCheckout && <Checkout onHide={hideCheckoutHandler} />}


            {(showDetials && ctx.totalAmount !==0 )&& <CartDetial/>}
            <div className={classes.Icon}>
            <img src={iconImg}/>
            {ctx.totalAmount ===0? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}       
            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>Empty!</p> : <p className={classes.Price}>{ctx.totalPrice}</p> }
                  
        <button 
        onClick={showCheckoutHandler}
        className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disable : ''}`}>check out</button>
       
        </div>
    );
};

export default Cart;