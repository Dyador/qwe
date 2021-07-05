import React from 'react'
import h from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from './../common/FormsControls/FormsControls.Module.css'
import {createField} from '../common/FormsControls/FormsControls'
const LoginForm = ({handleSubmit, error}) => {
    
    return (
        
            <form onSubmit={handleSubmit} >
                
                
                {createField('Email', 'email', [required], Input,)}
                {createField('Password', 'password', [required], Input, {type:'password'})}
                {createField(null, 'rememberMe', [], Input, {type:'checkbox'}, 'Remember Me')}
                    {/* <Field validate={[required]}  name={'email'} placeholder={'email'} component={Input}/> */}
                

                {/* <div>
                    <Field validate={[required]} type={'password'}  name={'password'} placeholder={'Password'} component={Input}/>
                </div> */}

                {/* <div>
                    <Field name={'rememberMe'}  type={'checkbox'} component={Input}/> Remember Me
                </div> */}
                 {error && <div className={style.formSummaryError}>
                  {error}
                 </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) =>{
        
       props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return(
            <Redirect to={'/Profiles'}/>
        )
    }
    return (
        <div>
            <h1>
               Login
            </h1>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps =(state)=>({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)