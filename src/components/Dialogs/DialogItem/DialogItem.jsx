import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <img className={s.avatar} src='https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' alt='avatar'/>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
};

export default DialogItem;
