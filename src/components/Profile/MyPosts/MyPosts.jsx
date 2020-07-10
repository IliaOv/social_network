import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  /*let posts = [
      {id: 1, message: "Hi, how are you?", likesCount: 12},
      {id: 2, message: "My first post!", likesCount: 5}
    ],*/
    let postElements =
      props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>);

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
};

export default MyPosts;
