import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  let state = props.store.getState(),

    addPost = () => {
      props.store.dispatch(addPostActionCreator());
    },
    onPostChange = (text) => {
      props.store.dispatch(updateNewPostTextActionCreator(text));
    };

  return (
    <MyPosts updateNewPostText={onPostChange}
             addPost={addPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}/>
  )
};

export default MyPostsContainer;
