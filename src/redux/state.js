import {rerenderEntireTree} from "../render";

const state = {
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
    newMessageText: '',
  },
}

export const addPost = () => {

  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.unshift(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const updateNewMessage = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export default state;