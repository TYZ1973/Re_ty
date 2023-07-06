import React from "react";
import Datt from "./Datt";
import '../Logs/LogItem.css';
import Card from "../UI/Card";

const LogItem =(props)=>{

    const deleteClickHandler = () =>{

        const isDel = window.confirm('delete');
        if(isDel){
            alert('删除成功')
            props.onDelete();
            // props.onDelete(props.logIndex);
            
        }
     }


    return (
        <Card className="item">
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