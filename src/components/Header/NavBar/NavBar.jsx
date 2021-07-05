import h from './NavBar.module.css'
import { NavLink, Route } from 'react-router-dom'

const NavBar = (props) =>{
    let dialogsData =[
        {id: 1 , name: 'John Doe'},
        {id: 2 , name: 'David Vane'},
        {id: 3 , name: 'Nancy Dilan'},
        {id: 4 , name: 'Norman Kenney'},
        {id: 5 , name: 'James Dilan'},
        {id: 6 , name: 'Mike Dorn'},
        {id: 7 , name: 'Patrick Morison'}
        ]
return(
    
        <header className={h.NavBar}>
         
               <div className={h.item_link}>
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/Companies">Companies</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Profiles">Profiles</NavLink>
                <NavLink to="/Jobs">Jobs</NavLink>
                <NavLink to="/Messegess" dialogsData={dialogsData} >Messeges</NavLink>
                <NavLink to="/Notification">Notification</NavLink>
                <NavLink to="/Users">Users</NavLink> 
                </div> 
              
      
               
              
           
           
           
        
        </header>
        
          
    );
}








export default NavBar;