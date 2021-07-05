import messageDataReducer, {addMessActionCreator, deletePost} from './messageData-reducer' 
import React from 'react'

test('test reduser Profile', () => {
  let action = addMessActionCreator('ITKA')
  let state ={
  
    messageData:[
      {id: 1 , message: 'Could you either write to or phone dad with this message?'},
      {id: 2 , message: 'I cant believe how many messages I get in my email inbox.'},
      {id: 3 , message: 'Please give me a second to listen to my messages on the phone.'},
      {id: 4 , message: 'Yo'}
    ],
  }
    
  let newState = messageDataReducer(state, action)
  expect(newState.messageData.length).toBe(5)
  expect(newState.messageData[4].message).toBe('ITKA')
  
});

test('test reduser Profile', () => {
  let action = addMessActionCreator('ITKA')
  let state ={
  
    messageData:[
      {id: 1 , message: 'Could you either write to or phone dad with this message?'},
      {id: 2 , message: 'I cant believe how many messages I get in my email inbox.'},
      {id: 3 , message: 'Please give me a second to listen to my messages on the phone.'},
      {id: 4 , message: 'Yo'}
    ],
  }
    
  let newState = messageDataReducer(state, action)
  expect(newState.messageData[3].message).toBe('Yo')
  
});

test('DELET POST', () => {
  let action = deletePost(1)
  let state ={
  
    messageData:[
      {id: 1 , message: 'Could you either write to or phone dad with this message?'},
      {id: 2 , message: 'I cant believe how many messages I get in my email inbox.'},
      {id: 3 , message: 'Please give me a second to listen to my messages on the phone.'},
      {id: 4 , message: 'Yo'}
    ],
  }
    
  let newState = messageDataReducer(state, action)
  expect(newState.messageData.length).toBe(3) 
});