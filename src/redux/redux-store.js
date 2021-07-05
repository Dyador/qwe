import messageDataReducer from './messageData-reducer'
import messagesDataHomeReducer from './messagesDataHome-reducer'
import usersReducer from './UsersData-reducer'
import profilesDatareducer from './profilesData-reducer'
import authReducer from './auth-reducer'
import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk'
let reducers = combineReducers({
    messagess: messageDataReducer, 
    home: messagesDataHomeReducer,
    usersPage: usersReducer,
    profiles: profilesDatareducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)))

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.__store__ = store;

export default store;

