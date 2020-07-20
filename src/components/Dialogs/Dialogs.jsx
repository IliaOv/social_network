import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
      .map(d => <DialogItem name={d.name} id={d.id}/>),

    messagesElements = state.messages
      .map(m => <Message message={m.message}/>),

    sendMessage = () => {
      props.addMessage();
    },

    onMessageChange = (e) => {
      let text = e.target.value;
      props.updateNewMessageText(text);
    };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={state.newMessageText}
            placeholder='Enter your message'/>
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
