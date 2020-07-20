import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "My first post!", likesCount: 5}
      ],
      newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Bye"}
      ],
      newMessageText: "",
      dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
      ]
    },

    sideBar: {
      friends: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"}
      ]
    }
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  }

};

export default store;
