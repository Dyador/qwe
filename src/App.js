import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import LeftBar from './components/LeftBar/LeftBar'
import RightBar from './components/RightBar/RightBar'
import Companies from './components/Companies/Companies'
import Projects from './components/Projects/Projects'
import Jobs from './components/Jobs/Jobs'
import Notification from './components/Notification/Notification'
import UsersContainer from './components/Users/UsersContainer'
// import HomeContainer from './components/Home/HomeContainer'
import { Route } from 'react-router-dom';
import ProfilesContainer from './components/Profiles/ProfilesContainer'
// import MessagessContainer from './components/Messagess/MessagessContainer'
import Login from './components/Login/Login'
import {Component} from 'react';
import { connect } from 'react-redux'
import {initializeApp} from './redux/app-reducer' 
import store from './redux/redux-store';
import { withRouter } from "react-router";
import {compose} from 'redux'
import Preloader from './components/common/Preloader';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {withSuspense} from './hoc/withSuspense'
const  HomeContainer = React.lazy(() => import('./components/Home/HomeContainer'));
const  MessagessContainer = React.lazy(() => import('./components/Messagess/MessagessContainer'));
class App extends Component{
  componentDidMount() {
     this.props.initializeApp()
  
}

 render(){
   if(!this.props.initialized){
   return <Preloader />
   }
   return (
   
    <div className='wrapper'>
    <div className="App">
      
     <HeaderContainer />
     
     <div className='content'>
     <LeftBar />
     
     <Route path='/Home' render={withSuspense(HomeContainer) } />
     
    
     
     
     
     
     <Route path='/Companies' render={ () => <Companies />} />
     <Route path='/Projects' render={ () => <Projects/>} />
     <Route path='/Profiles/:userId?' render={ () => <ProfilesContainer/>} />
     <Route path='/Jobs' render={ () => <Jobs/>} />
     <Route path='/Notification' render={ () => <Notification/>} />

     <Route path='/Messegess' render={ () => {return (
    
    <React.Suspense fallback={<Preloader/>}>
      <div>
        <MessagessContainer/> 
      </div>
    </React.Suspense>
      )} } />
   


      <Route path='/Users' render={ ()=> <UsersContainer/>}/>

      <Route path='/Login' render={ ()=> <Login/>}/>
     <RightBar />
    
     </div>
    
     </div>
     
    </div>
   
  );
}
}
const mapStateToProps = (state) =>({
  initialized: state.app.initialized
})

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)

let SamuraiJSApp = (props) =>{
 return <BrowserRouter>
          <Provider store={store}>
            <AppContainer  />
          </Provider>
        </BrowserRouter>
}
export default SamuraiJSApp