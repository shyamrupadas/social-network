import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Привет, мир!', likesCount: 5},
        {id: 2, message: 'Ом намо бхагавате васудевайа!', likesCount: 108},
        {id: 3, message: 'Какой-нибудь еще пост', likesCount: 1108},
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Shyam Rupa'},
        {id: 2, name: 'Vasliy'},
        {id: 3, name: 'Uncle Gena'},
        {id: 4, name: 'Валера'},
        {id: 5, name: 'Иван Викторович'},
      ],
      messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'What\' s up?'},
        {id: 3, message: 'Merhaba'},
        {id: 4, message: 'Namaste!'},
        {id: 5, message: 'Hari-bol!'},
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('state changed')
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
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },

}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;