import React, { useContext } from 'react';
import classes from './Counter.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import cardContext from '../../store/cardContext';
const Counter = (props) => {
    //usecontext to passing data
    const ctx = useContext(cardContext)


    const addButtonHandler = () =>{

        ctx.addMealHandler(props.meal)
    };
    const subButtonHandler = () =>{

        ctx.subMealHandler(props.meal)
    };




    return (
        <div className={classes.Counter}>
                {

                    (props.meal.amount && props.meal.amount !==0) ? 
                    (
                    <>
                    <button 
                    onClick={subButtonHandler}
                    className={classes.Sub}>
                        <FontAwesomeIcon icon={faMinus} /></button> 
                    <span className={classes.count}>{props.meal.amount}</span>
                    </>
                    ):null
               
                }

            
            
            

            <button 
            onClick={addButtonHandler} 
            className={classes.Add}>
            <FontAwesomeIcon icon={faPlus}/></button>
        </div>
    );
};

export default Counter;