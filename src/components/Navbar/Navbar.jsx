import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

  /*let state = store.getState().sideBar,
    friendsElements = state.friends.map(f => <div>{f.name}</div>);*/

  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
    <div className={s.item}>
      <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
    </div>
    <div className={s.sideBar}>
      <h3>Friends</h3>
      <div className={s.friends}>
        {/*friendsElements*/}
      </div>
    </div>
  </nav>
};

export default Navbar;
