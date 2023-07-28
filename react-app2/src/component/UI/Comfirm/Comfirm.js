import React from 'react';
import Backdrop from '../Counter/Backdrop/Backdrop';
import classes from './Comfirm.module.css'

const Comfirm = (props) => {
    return (
        <Backdrop className={classes.ComfirmOuter}>
            <div className={classes.Comfirm}>
            <p className={classes.ComfirmText}>{props.confirmText}</p>
            <div>
                <button 
                    onClick={(e)=>{props.onCancel(e)}}
                className={classes.Cancel}>Cancel</button>

                <button 
                    onClick={()=>{props.onOk()}}
                className={classes.Ok}>Yes</button>

            </div>
            </div>
        </Backdrop>

    );
};

export default Comfirm;