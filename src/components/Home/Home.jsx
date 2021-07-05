import h from './Home.module.css'
import Posts from './Posts/Posts'
import React from 'react'
import { addPostActionCreator, updeteNewPostTextActionCreator } from '../../redux/messagesDataHome-reducer'
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from '../../utils/validators/validators'
import {Textarea} from '../common/FormsControls/FormsControls'

const maxlenght10 = maxLengthCreator(10)

const Home = (props) => {
    
    // let newPostElement = React.createRef();
    // let addPost = () => {
    //     props.addPostActionCreator();
    //     // props.dispatch(addPostActionCreator());
    // }
    // let onPostChenge = () =>{
    //     let text = newPostElement.current.value
    //     props.updeteNewPostTextActionCreator(text)
    //     // props.dispatch(updeteNewPostTextActionCreator(text));
    // }
    let addNewMessage = (values) => {
        props.addPostActionCreator(values.newMessageBodyHome)
    }
    return (
        <div className={h.wrapper}>
            <div className={h.container}>
                <div>
                    <a href="">My Posts</a>
                </div>
                <div>
                    {/* <textarea ref={newPostElement} value={props.newPostTextHome} onChange={onPostChenge}></textarea>
        </div>
        <div>
        <button onClick={addPost}>Add posts</button> */}
                    <AddMessageFormReduxHome onSubmit={addNewMessage} />
                </div>
                <Posts messagesDataHome={props.messagesDataHome} />
            </div>
        </div>
    );
}
const AddMessageFormHome = (props) => {
    return (

        <form action="" onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxlenght10]} component={Textarea} 
              name='newMessageBodyHome' placeholder='Enter your massage' /></div>
            <div><button>Send</button></div>
        </form>

    )
}
const AddMessageFormReduxHome = reduxForm({ form: 'dialogAddMessageFormHome' })(AddMessageFormHome)
export default Home;