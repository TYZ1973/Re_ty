import Logs from "./components/Logs/Logs";
import LogsForm from "./components/LogsForm/LogsForm";
import '../src/App.css'
import { useState } from "react";
import ConfirmModal from "./components/UI/ConfirmModal/ConfirmModal";
import BackDrop from "./components/UI/backCover/BackDrop";
const App = (props) =>{

// -----------------------------------------
const [logsData ,setlogsData]= useState([
    {
        id: '001',
        date : new Date(2022 ,1,20,18,30),
        desc : 'data xxx1',
        time: 30
    }, 
    {
        id: '002',
        date : new Date(2022 ,6,12,18,30),
        desc : 'data xxx2',
        time: 55
    }, 
    {
        id: '003',
        date : new Date(2022 ,11,30,18,50),
        desc : 'data xxx3',
        time: 66
    }, 
    {
        id: '004',
        date : new Date(2022 ,0,18,18,30),
        desc : 'data xxx1',
        time: 88
    },


]);

// -------------------------------------------
    const saveLogHandler =(newLog) => {

        // console.log(newLog);
        newLog.id = Date.now()+'';
        // logsData.push(newLog);
        
        setlogsData([newLog, ...logsData]);
        // console.log(logsData);
    
    };

    const deleteLogs = (index) =>{

        setlogsData(prevState => {
            
           const newlos = [...prevState];
           newlos.splice(index,1);
           return newlos;
           
           });  
    };


    return <div className="app">

        

        <LogsForm onSaveLog = {saveLogHandler} />
        
        <Logs logsData={logsData} onDelete ={deleteLogs}/>

        
        </div>
};


export default App;