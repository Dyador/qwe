import React from 'react';
import h from './Users.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'
import User from './user'
let UsersClearComponent = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props})=>{
    
    
    

   return (<div>
       
        {/* <div className={h.num}>
        {pages.map( p =>{
            return <span className={props.currentPage === p && h.selectedPage }
            onClick={ ()=> {props.onPageChanged(p)}}>{p}</span>
        })}
       </div> */}
       <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
      
        
        {
        props.users.map(u => <User kay={u.id} props={props} u={u} /> 
        
         
        
            )

        }

        
             
        



    </div>
   )
}

export default UsersClearComponent;