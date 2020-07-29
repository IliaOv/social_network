//import React from 'react';
import connect from "react-redux/es/connect/connect";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../Redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
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
      },
      setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
        dispatch(setUsersTotalCountAC(totalCount))
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
