import h from './Messagess.module.css'
import { NavLink, Route } from 'react-router-dom'
import React from 'react'
import {addMessActionCreator, onPostChengeActionCreator} from '../../redux/messageData-reducer'
import Messagess from './Messagess'
import { withAuthRedirect} from '../../hoc/withAuthRedirect';
import {connect} from 'react-redux'
import { compose } from 'redux'


// const MessagessContainer = (props) =>{
    
//    return(
//         <StoreContext.Consumer>
            
//             { (store) => {
//                 let state = store.getState();
//             let addMess = () =>{
//                 store.dispatch(addMessActionCreator());
                    
//                 } 
//                  let onPostChenge = (text) =>{
//                  store.dispatch(onPostChengeActionCreator(text));
//                  }

//         return <Messagess onPostChengeActionCreator={onPostChenge} addMessActionCreator={addMess} 
//          dialogsData={state.messagess.dialogsData} newPostText={state.messagess.newPostText} 
//          messageData={state.messagess.messageData}/>;
//                 }
//         }
//         </StoreContext.Consumer>
//    )
    
    
// }
let mapStateToPropss =(state) =>{
return{
    messageData: state.messagess.messageData,
    dialogsData: state.messagess.dialogsData, 
    newPostText: state.messagess.newPostText,
   
}
}

let mapDispatchToPropss =(dispatch)=>{
return{
    // onPostChengeActionCreator: (text) =>{
    //     dispatch(onPostChengeActionCreator(text));
    // },
    addMessActionCreator: (newMessageBody) =>{
        dispatch(addMessActionCreator(newMessageBody));
    }
}
}
// compose(connect(mapStateToPropss,mapDispatchToPropss),withAuthRedirect)(Messagess)
// let AuthRedirectComponent = withAuthRedirect(Messagess) 

// const MessagessContainer = connect(mapStateToPropss,mapDispatchToPropss)(AuthRedirectComponent);
// export default MessagessContainer;
export default compose(connect(mapStateToPropss,mapDispatchToPropss),withAuthRedirect)(Messagess)