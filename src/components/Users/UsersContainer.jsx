import React from 'react';
import {connect} from 'react-redux'
import {follow, setUsers, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers} from '../../redux/UsersData-reducer';
import UsersClearComponent from './UsersClearComponent';
import Preloader from '../common/Preloader'

import { compose } from 'redux';
import {getUsersSSuper, getPageSize, getUsersS, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from './../../redux/users-selectors'
class UsersContainer extends React.Component {
    componentDidMount(){
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    
    
    //     this.props.toggIsFetchingAC(true);
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    
    // .then(data => {
    //     this.props.toggIsFetchingAC(false)
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    // });
  }

    onPageChanged = (pageNumber)=> {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)

    
    
        //     this.props.setCurrentPage(pageNumber)
    //     this.props.toggIsFetchingAC(true)
    // usersAPI.getUsers(pageNumber, this.props.pageSize)
    //     .then(data => {
    //     this.props.setUsers(data.items);
    //     this.props.toggIsFetchingAC(false)
    // });
}




render() {
    
    
   
    return <>
    
    { this.props.isFetching ? <Preloader /> : null }

    <UsersClearComponent 
    totalUsersCount={this.props.totalUsersCount} 
    pageSize={this.props.pageSize} 
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    setCurrentPage={this.props.setCurrentPage}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    followingInProgress={this.props.followingInProgress}
    /> </>
}
}

// let mapStateToProps = (state) =>{
// return{
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
// }
// }
let mapStateToProps = (state) =>{
    console.log('mapStateTOProps USERS')
    return{
        // users: getUsersS(state),
        users: getUsersSSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
    }





export default  compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
    
  }))(UsersContainer)