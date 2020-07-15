import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs
      .map(d => <DialogItem name={d.name} id={d.id}/>),

    messagesElements = props.state.messages
      .map(m => <Message message={m.message}/>),

    newMessage = React.createRef(),

    sendMessage = () => {
      props.dispatch(addMessageActionCreator());
    },

    onMessageChange = () => {
      let text = newMessage.current.value;
      props.dispatch(updateNewMessageTextActionCreator(text));
    };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText}/>
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
