import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateUserStatus={this.props.updateUserStatus}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status
});

export default compose(connect(mapStateToProps, {
  getUserProfile,
  getUserStatus,
  updateUserStatus
}), withRouter)(ProfileContainer);
