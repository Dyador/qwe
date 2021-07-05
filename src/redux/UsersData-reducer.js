import { useCallback } from "react";
import {usersAPI} from '../api/api'
import {updateObjectInArray} from '../utils/validators/object-helpers'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGOLE_IS_FETCHING = 'TOGOLE_IS_FETCHING';
const TOGOLE_IS_FOLLOWING_PROGRESS = 'TOGOLE_IS_FOLLOWING_PROGRESS';
let initialState = {
   
    users: [],
    pageSize: 10,
    totalUsersCount:0 ,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action) =>{

    switch(action.type){
      case FOLLOW:
       return {...state, 
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
        // users: state.users.map( u=> {
        //     if(u.id === action.userId){
        //         return{...u, followed: true}
        //     }
        //  return u;
        // }) 
        
    }

      case UNFOLLOW:
        return {...state, 

            users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            // users: state.users.map( u=> {
            //     if(u.id === action.userId){
            //         return{...u, followed: false}
            //     }
            //  return u;
            // }) 
        }
      case SET_USERS:{
          return{...state, users: action.users }
      }
      case SET_CURRENT_PAGE:{
        return{...state,  currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT:{
        return{...state,  totalUsersCount: action.count }
    }
    case TOGOLE_IS_FETCHING:{
        return{...state,  isFetching: action.isFetching }
    }
    case TOGOLE_IS_FOLLOWING_PROGRESS:{
        return{...state,  
            followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id =>id != action.userId) 
    }
}
   
      default:
    return state;
     
   }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT,  count: totalUsersCount});
export const toggIsFetchingAC = (isFetching) => ({type:TOGOLE_IS_FETCHING,  isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type:TOGOLE_IS_FOLLOWING_PROGRESS,  isFetching, userId});


export const getUsers = (currentPage, pageSize) => {
return async (dispatch) => {
    dispatch(toggIsFetchingAC(true))
    dispatch(setCurrentPage(currentPage))
    
    let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggIsFetchingAC(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCountAC(data.totalCount))
    }
}

const followUnfolowFlow = async (dispatch, userid, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true,userid))
    let response = await apiMethod(userid)
    
    if(response.data.resultCode == 0){
    dispatch(actionCreator(userid))}
    dispatch(toggleFollowingInProgress(false, userid))
   }


export const follow = (userid,) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)
        let actionCreator = followSuccess
        
        followUnfolowFlow(dispatch, userid, apiMethod, actionCreator)
        
}
}
export const unfollow = (userid,) => {
    return async(dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI)
        let actionCreator = unfollowSuccess
        
        followUnfolowFlow(dispatch, userid, apiMethod, actionCreator)
        
    }
}

export default usersReducer; 