const addPost = 'addPost';
const updateNewPostText = 'updateNewPostText';
const DELET_POST = 'DELET_POST'

let initialState ={
  
    messageData:[
      {id: 1 , message: 'Could you either write to or phone dad with this message?'},
      {id: 2 , message: 'I cant believe how many messages I get in my email inbox.'},
      {id: 3 , message: 'Please give me a second to listen to my messages on the phone.'},
      {id: 4 , message: 'Yo'}
    ],
    dialogsData: [
      {id: 1 , name: 'John Doe'},
      {id: 2 , name: 'David Vane'},
      {id: 3 , name: 'Nancy Dilan'},
      {id: 4 , name: 'Norman Kenney'},
      {id: 5 , name: 'James Dilan'},
      {id: 6 , name: 'Mike Dorn'},
      {id: 7 , name: 'Patrick Morison'}
      ],
     
  
  }
   
  
const messageDataReducer = (state = initialState, action) =>{
      switch(action.type){
        case addPost:{
          let newMessages = {
            id: 5,
            message: action.newMessageBody,
          };
          let stateCopy ={...state}
          stateCopy.messageData = [...state.messageData]
          stateCopy.messageData.push(newMessages);
          // state.messageData.push(newMessages);
          
          return stateCopy;
        }
        case updateNewPostText:
          let stateCopy ={...state}
          stateCopy.newPostText = action.newText;
          return stateCopy;
          default:
            return state;

            case DELET_POST:
              return {...state, messageData: state.messageData.filter(p => p.id != action.postId)} 
        }
        
      }
     
    
      export let addMessActionCreator = (newMessageBody) =>{
        return {
            type: addPost,
            newMessageBody
        }
      }
      export const deletePost =(postId) =>({type: DELET_POST, postId})
      // export let onPostChengeActionCreator = (text) =>{
      //   return {
      //     type: updateNewPostText,newText: text
      //   }
      // }
         
     


export default messageDataReducer;
