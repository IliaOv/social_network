//import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage
    }
  },

  mapDispatchToProps = (dispatch) => {
    return {
      updateNewMessageText: (text) => {
        dispatch(updateNewMessageTextActionCreator(text));
      },
      addMessage: () => {
        dispatch(addMessageActionCreator());
      }
    }
  };

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
