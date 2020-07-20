import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage,

    sendMessage = () => {
      props.store.dispatch(addMessageActionCreator());
    },

    onMessageChange = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text));
    };


  return (
    <Dialogs updateNewMessageText={onMessageChange}
             addMessage={sendMessage}
             dialogsPage={state}/>
  )
};

export default DialogsContainer;
