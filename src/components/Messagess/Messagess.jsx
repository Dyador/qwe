import h from './Messagess.module.css'
import { NavLink, Redirect, Route } from 'react-router-dom'
import React from 'react'
import {addMessActionCreator, onPostChengeActionCreator} from './../../redux/messageData-reducer'
import {Field, reduxForm} from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import {required, maxLengthCreator} from '../../utils/validators/validators'

const maxLength100 = maxLengthCreator(100)

const DialogItem = (props) => {
    return(
        <div className={h.n}>
        
        <div className={h.name_content}> <NavLink to={'/Messagess/' + props.id}>{props.name}</NavLink></div>
        
      </div> 
        
    )
}
const Ms = (props) =>{
return(
    <div>
        <div className={h.messege_content}>
            {props.ms} 
        </div>
    </div>
)
}


const Messagess = (props) =>{
   
    
    
 
    
let newdialogsData = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
let newmessageData = props.messageData.reverse().map(item => <Ms ms={item.message} id={item.id} />)
   
    // let addMess = () =>{
    //     props.addMessActionCreator()
    //     // props.dispatch(addMessActionCreator());
        
    // } 
    //  let onPostChenge = (props) =>{
    //     // let text = newMessage.current.value;
    //     // props.dispatch(onPostChengeActionCreator(text));
    //     // props.onPostChengeActionCreator(text)
    //  }
     let addNewMessage = (values) =>{
        props.addMessActionCreator(values.newMessageBody)
     }
    // if(props.isAuth === false) return <Redirect to={"/Login"}/>
    return(
        <div className={h.content}>
        <div className={h.name}>
     
        {newdialogsData}
        </div>
        <div>
        
        {newmessageData}
        {/* <textarea onChange={onPostChenge} name="" id="" cols="25" rows="3" ref={newMessage} value={props.newPostText} >
            
        </textarea>
        <button onClick={addMess} >new Messages</button> */}
        <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
        </div>
        
    );
    
}
const AddMessageForm = (props) => {
    return(
        
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength100]}
            name='newMessageBody' placeholder='Enter your massage'/>
        <div><button>Send</button></div>
        </form>
        
    )
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Messagess;
