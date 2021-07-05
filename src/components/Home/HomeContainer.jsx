import h from './Home.module.css'
import Posts from './Posts/Posts'
import React from 'react'
import {addPostActionCreator, updeteNewPostTextActionCreator} from '../../redux/messagesDataHome-reducer'
import Home from './Home'
import StoreContext from '../../StoreContext'

import {connect} from 'react-redux'
// const HomeContainer = (props) =>{
    
//    return(
//     <StoreContext.Consumer>
//         { (store) =>{
//         let state = store.getState();
    
//         let addPost = () =>{
//             // props.addPostActionCreator();
//             store.dispatch(addPostActionCreator());
//         }
//         let onPostChenge = (text) =>{
//             // props.updeteNewPostTextActionCreator(text)
//             store.dispatch(updeteNewPostTextActionCreator(text));
//         }
//     return( <Home updeteNewPostTextActionCreator={onPostChenge} addPostActionCreator={addPost}
//         messagesDataHome={state.home.messagesDataHome} newPostTextHome={state.home.newPostTextHome}/>
//     );
//     }
//     }
//     </StoreContext.Consumer>
//    );
// }
const mapStateToProps =(state) =>{
return{
    messagesDataHome: state.home.messagesDataHome,
    newPostTextHome: state.home.newPostTextHome
  }
}
const mapDispatchToProps =(dispatch)=>{
 return{
    // updeteNewPostTextActionCreator: (text)=>{
    //     dispatch(updeteNewPostTextActionCreator(text));
    // },
    addPostActionCreator: (newMessageBodyHome)=>{
        dispatch(addPostActionCreator(newMessageBodyHome));
    }
  }   
}
const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(Home);
export default HomeContainer;