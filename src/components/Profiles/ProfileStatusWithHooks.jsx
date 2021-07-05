import h from './Profiles.module.css'
import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)  
    }, [props.status])
    const activateEditeMode = () => {
        setEditMode(true)
    }

    const deactivateEditeMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
        
       } 

    return (
        <div className={h.contentProfileStatus}>
            {!editMode &&
                <div className={h.profilestatus}>
                    <span onDoubleClick={activateEditeMode}>{props.status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div className={h.profilestatus}>
                    <input onChange={onStatusChange} 
                    onBlur={deactivateEditeMode} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    );

}
export default ProfileStatusWithHooks