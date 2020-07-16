import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {

  let postElements =
      props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>),

    newPostElement = React.createRef(),

    addPost = () => {
      props.dispatch(addPostActionCreator());
    },
    onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
    };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
};

export default MyPosts;
