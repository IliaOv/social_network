import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
  SET_USER_PROFILE = 'SET-USER-PROFILE',
  SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "My first post!", likesCount: 5}
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 3, message: action.newPostText, likesCount: 0}]
      };
    case SET_USER_PROFILE:
      return {...state, profile: action.profile};
    case SET_STATUS:
      return {...state, status: action.status};
    default:
      return state;
  }

};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
};

export default profileReducer;
