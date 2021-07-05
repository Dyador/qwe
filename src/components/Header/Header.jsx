import h from './Header.module.css'
import NavBar from './NavBar/NavBar'
import { NavLink } from 'react-router-dom'
const Header = (props) =>{
    
    return(
        
        <header className={h.header}>
         <div className={h.container}>
           <img className={h.container_logo} src='https://st.depositphotos.com/1877361/1955/v/600/depositphotos_19551395-stock-illustration-alphabet-logo-design-letter-w.jpg' />
         
               <input className={h.inp} type="text" placeholder='Search...'/>
               <button className={h.but} type='submit'></button>
                <NavBar />
           
                <div className={h.loginblock}>
                    {props.isAuth 
                    ? <div> {props.login} <button onClick={props.logout}>Log out</button>  </div>
                    :<NavLink className={h.navlink} to={'/login'}>Login</NavLink>}
               </div>
              </div>
           
           
           
        
        </header>
        
    );
}
export default Header;