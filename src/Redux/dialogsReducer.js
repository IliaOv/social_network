const ADD_MESSAGE = 'ADD-MESSAGE',
  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }

};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogsReducer;
