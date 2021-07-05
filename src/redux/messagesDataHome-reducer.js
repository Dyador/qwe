const addPostHome = 'addPostHome'; 
// const updateNewPostTextHome = 'updateNewPostTextHome';

let initialState = {
   
    messagesDataHome: [
        {posts: 'OK Based on my probing, for Trumps election fraud tweets:'},
        {posts: 'Sure seems like a lot of special-case patching to avoid just enforcing a basic rule'},
        {posts: 'We love to see it'},
        {posts: 'go is nostalgic C fanfic'},
      
      ],
     
    
};

const messagesDataHomeReducer = (state = initialState, action) =>{

     switch(action.type){
       case addPostHome:
        let newMessages = action.newMessageBodyHome;
          
          // let stateCopy = {...state} 1
          // stateCopy.messagesDataHome = [...state.messagesDataHome] 1
          return{
            ...state,
            
            messagesDataHome: [ ...state.messagesDataHome, {posts: newMessages}],
            newPostTextHome: ''
          };
        
    //  case updateNewPostTextHome:
    //    return{
    //      ...state,
    //     newPostTextHome: action.newText
    //    }
     default:
        return state;
      
    }
}
export let addPostActionCreator = (newMessageBodyHome) => {
    return {
        type: addPostHome, 
        newMessageBodyHome
    }
  }
  // export let updeteNewPostTextActionCreator = (text) => {
  //   return {
  //       type: updateNewPostTextHome, newText: text 
  //   }
  // }
export default messagesDataHomeReducer;