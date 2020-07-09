import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Sveta</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>Yo</div>
        <div className={s.dialog}>Bye</div>
      </div>
    </div>
  )
};

export default Dialogs;
