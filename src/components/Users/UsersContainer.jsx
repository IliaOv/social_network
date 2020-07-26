import React from 'react';
import connect from "react-redux/es/connect/connect";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
      users: state.usersPage.users
    }
  },
  mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => {
        dispatch(followAC(userId))
      },
      unfollow: (userId) => {
        dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
        dispatch(setUsersAC(users))
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
