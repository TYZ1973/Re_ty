import React, { useState } from "react";
import Datt from "./Datt";
import '../Logs/LogItem.css';
import Card from "../UI/Card";
import ConfirmModal from "../UI/ConfirmModal/ConfirmModal";

const LogItem =(props)=>{

        //添加一个state 记录是否现实confirmModal
    const [showConfirm ,setConfirm] = useState(false);


    const deleteClickHandler = () =>{

        // const isDel = window.confirm('delete');
        // if(isDel){
        //     alert('删除成功')
        //     props.onDelete();
        //     // props.onDelete(props.logIndex);
        // }
        setConfirm(true);    
     };

     const cancelHandler = () => {

        setConfirm(false);

     }
     const submitHandler = () =>{

        props.onDelete();

     }


    return (
        <Card className="item">

            {showConfirm && <ConfirmModal confirmText ="11xxxxxx" onCancel ={cancelHandler} onsubmit={submitHandler}/>}

             <Datt date={props.date}/>
            <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className='time'>{props.time}</div>
            </div>
        <div>
            <div onClick={deleteClickHandler} className="delete">X</div>
        </div>

    </Card>

    );
    };


export default LogItem;