import {usersAPI, profileAPI } from '../api/api'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    profile: null,
    status: "",
}

const profilesDatareducer = (state = initialState, action) =>{
   
    switch(action.type){
        case SET_USER_PROFILE:{
           return{...state, profile: action.profile} 
        }
        case SET_STATUS:{
            return{...state, status: action.status} 
         }
    
           default:
         return state;
       
     }
     
    }

export const setUserProfile = (profile)=>({ type: SET_USER_PROFILE, profile});
export const setStatus = (status)=>({ type: SET_STATUS, status});


export const getUserProfile = (userId)=> async (dispatch)=>{
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
        
}
export const getStatus = (userId)=> async (dispatch)=>{
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status)=> async (dispatch)=>{
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){ 
        dispatch(setStatus(status))
    }  
}

export default profilesDatareducer;