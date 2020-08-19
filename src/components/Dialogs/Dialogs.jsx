import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
      .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>),

    messagesElements = state.messages
      .map(m => <Message message={m.message} key={m.id}/>),

    addNewMessage = (values) => {
      props.addMessage(values.newMessageText);
    };

  if (!props.isAuth) return <Redirect to='/Login'/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required, maxLength50]}
               name='newMessageText'
               placeholder='Enter your message'/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
