//import React from 'react';
import {addMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
};

export default compose(
  connect(mapStateToProps, {updateNewMessageText, addMessage}),
  withAuthRedirect
)(Dialogs);
