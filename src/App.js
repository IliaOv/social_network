import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Profile/ProfileInfo/ProfileInfo.module.css";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={props.state.sideBar}/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
               render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
        <Route path='/profile'
               render={() => <Profile
                 profilePage={props.state.profilePage}
                 dispatch={props.dispatch}/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  );
};

export default App;
