import h from './Users.module.css'
import React from 'react'
import * as axios from 'axios'

const Users = (props) =>{

let getUsers =()=>{
  if(props.users.length === 0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
        this.props.setUsers(response.data.items);
             }); 
  }
}
  let mock = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FqHsC7zSeWuW5biIjEZGK9BdcnFZ4nBuIQ&usqp=CAU"
    
   
    return(<div >
       
      <button onClick={getUsers}>Get Users</button>
     {this.props.users.map(u => <div kay={u.id}>
      
     <div>
     
         <img src={u.photos.small != null ? u.photos.small : mock} alt=""/>
     </div>
     <div>
     {u.followed ?
                    <button  onClick={()=>{props.follow(u.id)}}>follow </button>:
                    <button  onClick={()=>{props.unfollow(u.id)}}>unfollow </button>}
     </div>
     
     <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
            
    
     </div>)

     }


    
    
    
    </div>
     )
    
    }
export default Users;