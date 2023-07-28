import React, { useContext, useState } from 'react';
import Backdrop from '../UI/Counter/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './Cartdetial.module.css'
import cardContext from '../store/cardContext';
import Meal from '../Meals/Meal/Meal';
import Comfirm from '../UI/Comfirm/Comfirm';
const CartDetial = () => {

    const ctx = useContext(cardContext);

    const [showConfirm, setShowConfirm]=useState(false);

    const showConfirmHandler=()=> {

        setShowConfirm(true)
    }

    const cancelHandler = (e) =>{
        e.stopPropagation()
        setShowConfirm(false)

    }
    const onOKHandler = () =>{


        ctx.clearCart();
        // setShowConfirm(false)

    }

    return (
        <Backdrop onClick={cancelHandler} >

            {showConfirm && <Comfirm 
            onCancel ={cancelHandler}
            onOk={onOKHandler}
            confirmText={'Clear the Card??'} />}

            <div 
            className={classes.CartDetial}
            onClick={e => e.stopPropagation()}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>Details</h2>
                    <div 
                    onClick={showConfirmHandler}
                    className={classes.Clear}>
                        <FontAwesomeIcon icon ={faTrash}/>
                        <span>Clear</span>
                    </div>
                </header>

            <div className={classes.MealList}>
            {
                ctx.items.map(item =>
                    <Meal noDesc key={item.id} meal={item}/>
                    )
            }

            </div>
            </div>
        </Backdrop>
    );
};

export default CartDetial;