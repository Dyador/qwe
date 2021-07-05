import React from 'react'
import style from './FormsControls.Module.css'
import {Field, reduxForm} from 'redux-form'
export const FormControl = ({input, meta, child, ...props}) =>{
   const showError = meta.touched && meta.error

return(
 <div className={style.formcontrol + " " + (showError ? style.error : "")}> 
    <div> 
     {props.children}
     </div>
    {showError &&  <span>{meta.error}</span>}
 </div>
)
}


export const Textarea = (props) =>{
   const {input, meta, child, ...restprops} = props
return(
 <FormControl {...props}><textarea {...restprops} {...input}/></FormControl>
)
}
export const Input = (props) =>{
    const {input, meta, child, ...restprops} = props
   return(
      <FormControl {...props}><input {...restprops} {...input}/></FormControl>
     )
   }


export const createField = (placeholder, name, validators, component, props ={}, text = '') => (
<div>
<Field validate={validators}  name={name} placeholder={placeholder} component={component} {...props}/>
{text}
</div>
)


   