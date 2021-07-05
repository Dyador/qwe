import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
// import store from './redux/state';
import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
// let rerenderEntireTree = (state) =>{}
import SamuraiJSApp from './App'

ReactDOM.render(
  <SamuraiJSApp/>,

  document.getElementById('root'));

  
// rerenderEntireTree(store.getState());
// store.subscribe(() =>{
//   let state = store.getState();
//   rerenderEntireTree(state);
// });


// state={state} state={store.getState()}  
// dispatch={store.dispatch.bind(store)} store={store}

reportWebVitals();



// updateNewPostText={store.updateNewPostText.bind(store)} 
// addPostHome={store.addPostHome.bind(store)}
// updateNewPostTextHome={store.updateNewPostTextHome.bind(store)}