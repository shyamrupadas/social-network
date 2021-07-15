const SEND_MESSAGE = 'social-network/dialogs/SEND-MESSAGE';

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}

const initialState = {
  dialogs: [
    {id: 1, name: 'Shyam Rupa'},
    {id: 2, name: 'Vasliy'},
    {id: 3, name: 'Uncle Gena'},
    {id: 4, name: 'Валера'},
    {id: 5, name: 'Иван Викторович'},
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'What\' s up?'},
    {id: 3, message: 'Merhaba'},
    {id: 4, message: 'Namaste!'},
    {id: 5, message: 'Hari-bol!'},
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;