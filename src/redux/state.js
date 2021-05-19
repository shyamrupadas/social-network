const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Привет, мир!', likesCount: 5},
      {id: 2, message: 'Ом намо бхагавате васудевайа!', likesCount: 108},
      {id: 3, message: 'Какой-нибудь еще пост', likesCount: 1108},
    ]
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
  },
}

export default state;