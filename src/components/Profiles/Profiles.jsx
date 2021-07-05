import h from './Profiles.module.css'
import React from 'react';
import Preloader from './../common/Preloader'
import ProfileStatus from './ProfileStatus'
import { NavLink } from 'react-router-dom'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
const Profiles = (props =>{
    console.log('RENDER')
    if (!props.profile){
     return <div>
      <Preloader/>
     </div>    
    }
    
    return(
        <div className={h.Cc}>
            <div className={h.profile}>
            <img src={props.profile.photos.large} alt=""/>
            </div>
            {props.profile.contacts.instagram}
            <div>{'FullName' + '  '+ props.profile.fullName}</div>
           <div> {'User ID' + '  '+  props.profile.userId}</div>
           <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/> 
        </div>
 
    );
})

export default Profiles