import React from 'react';
import Header from "./Header";
import {logout} from "../../Redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  logout: state.auth.logout
});

export default connect(mapStateToProps, {logout})(HeaderContainer);
