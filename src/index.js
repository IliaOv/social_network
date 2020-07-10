import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: "Hi, how are you?", likesCount: 12},
  {id: 2, message: "My first post!", likesCount: 5}
],
   dialogs = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
],
  messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Yo"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Bye"}
  ];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
