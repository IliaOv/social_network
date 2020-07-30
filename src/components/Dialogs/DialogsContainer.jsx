//import React from 'react';
import {addMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, addMessage})(Dialogs);

export default DialogsContainer;
