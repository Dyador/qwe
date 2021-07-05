import React from 'react';
import h from './Users.module.css'
import { NavLink } from 'react-router-dom'

let user = ({u, props})=>{
    let mock = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FqHsC7zSeWuW5biIjEZGK9BdcnFZ4nBuIQ&usqp=CAU"
 return (
                <div>
                   <div>
                    <NavLink to={'/Profiles/' + u.id}> 
                        <img src={u.photos.small != null ? u.photos.small : mock} alt="" /></NavLink>
                </div>
                <div>
                {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                            }}>unfollow </button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                            }}>follow </button>}
                </div>
                
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>      

            
                




    </div>
 )
}

export default user