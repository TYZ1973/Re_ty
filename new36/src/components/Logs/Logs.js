
import LogItem from "./LogItem";
import "../Logs/Logs.css" ;
import Card from "../UI/Card";

const Logs = (props) =>{

      

    const logItemData = props.logsData.map(

        (item ,index)=> <
         LogItem 
        //  logIndex = {index}
         onDelete={()=>props.onDelete(index)} 
         key ={item.id}
         date={item.date} 
         desc={item.desc} 
         time ={item.time} 
         
         />)

            // if(logItemData.length === 0 ){

            //     logItemData = <p>no data</p>;
            // };

        return <Card className="logs"> 
        {
        logItemData.length !==0 ? logItemData : <p>no data</p>
        // logItemData
        }


        {/* <LogItem/>
        <LogItem/>
        <LogItem/>
        <LogItem/> */}

        </Card>


};

export default Logs;