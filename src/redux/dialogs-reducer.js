const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      state.messages.push({id: 6, message: body});
      state.newMessageBody = '';
      return state;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      state.newMessageBody = action.body;
      return state;
    }
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;