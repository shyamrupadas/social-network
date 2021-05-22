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
      newMessageText: '',
    },
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.unshift(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },

  }

export default store;