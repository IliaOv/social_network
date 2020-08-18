import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let postElements =
      props.posts.map(p => <Post message={p.message} like={p.likesCount} key={p.id}/>),

    addNewPost = (values) => {
      props.addPost(values.newPostText);
    };


  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={addNewPost}/>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component='textarea'/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
