import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import '../LogsForm/LogsForm.css'

const LogsForm = () => {

    // const ulRef = useRef();
        // let iptDate = '';
        // let iptContent='';
        // let iptTime = 0;
    // const [iptDate,setIptDate]=useState('');
    // const [iptContent,setIptContent]=useState('');
    // const [iptTime,setIptTime]=useState('');

        const [formDate , setFormData] = useState({
    
        iptDate : '',
        iptContent :'',
        iptTime : ''

        });

    const addDate =(e)=>{
     
        // iptDate = e.target.value;
        // setIptDate(e.target.value);
        setFormData({
            ...formDate,
            iptDate : e.target.value
        });

    }; 

    const addContent =(e)=>{
        // console.log(e.target.value);
        // iptContent = e.target.value;
         // console.log(ulRef.current.value)
        //  setIptContent(e.target.value);
        //  console.log(e.target.value);
        setFormData({
            ...formDate,
            iptContent : e.target.value
        });

    };

    const addTime=(e)=>{
        // iptTime = e.target.value;
        // setIptTime(e.target.value);

        setFormData({
            ...formDate,
            iptTime : e.target.value

        });

    };

    const formSubminHandler=(e)=>{
        e.preventDefault();    

    const newLog ={

        date: new Date(formDate.iptDate),
        desc: formDate.iptContent,
        time: + formDate.iptTime

    }
        // setIptDate('');
        // setIptContent('');
        // setIptTime('');
        setFormData({
            iptTime :'',
            iptContent :'',
            iptTime : ''
        });

         console.log(newLog);
         

    };

    return (

        <Card className="logs-form">
            <form onSubmit={formSubminHandler}>
                <div>
                    <label htmlFor="date">日期</label>
                    <input onChange={addDate}  value={formDate.iptDate} id="date" type="date" />
                </div>

                <div>
                    <label htmlFor="desc">内容</label>
                    {/* <input ref={ulRef} onChange={addContent} id="desc" type="text" /> */}
                    <input onChange={addContent} value={formDate.iptContent} id="desc" type="text" />
                </div>
                <div>
                    <label htmlFor="time">时长</label>
                    <input onChange={addTime} value={formDate.iptTime} id="time" type="number" />
                </div>
                
                <div id="btn">
                    <button >submit</button>
                </div>
            </form>
        </Card>
    )

};


export default LogsForm;