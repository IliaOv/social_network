import {rerenderEntireTree} from "../render";

let state = {

  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 12},
      {id: 2, message: "My first post!", likesCount: 5}
    ],
    newPostText: 'it-kamasutra.com'
  },

  dialogsPage: {
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "Yo"},
      {id: 3, message: "Yo"},
      {id: 4, message: "Bye"}
    ],
    dialogs: [
      {id: 1, name: "Dimych"},
      {id: 2, name: "Andrey"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Sasha"},
    ]
  },

  sideBar: {
    friends: [
      {id: 1, name: "Dimych"},
      {id: 2, name: "Andrey"},
      {id: 3, name: "Sveta"}
    ]
  }

};

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
