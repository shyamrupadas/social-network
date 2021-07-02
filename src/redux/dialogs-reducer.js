const SEND_MESSAGE = 'social-network/dialogs/SEND-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}],
      };
    }

    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;