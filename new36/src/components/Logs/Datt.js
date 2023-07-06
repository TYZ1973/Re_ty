import React from 'react';
import "../Logs/Datt.css";

const Datt =(props) =>{
  // 获取月份
  const month = props.date.toLocaleString('zh-CN', {month:'long'});
  // 获取日期
  const date = props.date.getDate();

    return(

        <div>
        <div className='item'>
        <div className='date'>
        <div className='month'>{month}</div>
        <div className='day'>{date}</div>
        </div>
        </div>
        </div>
    );
};

export default Datt;