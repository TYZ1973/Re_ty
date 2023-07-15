
import Card from '../Card';
import BackDrop from '../backCover/BackDrop';
import './ConfirmModal.css'


const ConfirmModal = props =>{

    return <BackDrop>
    <Card className="confirmModal"> 

           <div className='confirmText'>
        <p>{props.confirmText}</p>
           </div>
            <div className='confirmButton'>
                <button className='okButton' onClick={props.onsubmit}>Confirm</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>
            </Card>
    </BackDrop>
}

export default  ConfirmModal;