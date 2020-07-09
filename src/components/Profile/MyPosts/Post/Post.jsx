import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


  return (
    <div className={s.item}>
      <img src='https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' alt='avatar'/>
      {props.message}
      <div>
        <span>{props.like} like</span>
      </div>
    </div>
  )
};

export default Post;
