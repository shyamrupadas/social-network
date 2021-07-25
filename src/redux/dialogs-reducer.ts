import { InferActionsTypes } from './redux-store';

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
    { id: 1, name: 'Shyam Rupa' },
    { id: 2, name: 'Vasliy' },
    { id: 3, name: 'Uncle Gena' },
    { id: 4, name: 'Валера' },
    { id: 5, name: 'Иван Викторович' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'What\' s up?' },
    { id: 3, message: 'Merhaba' },
    { id: 4, message: 'Namaste!' },
    { id: 5, message: 'Hari-bol!' },
  ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case 'sn/dialogs/SEND-MESSAGE': {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    }

    default:
      return state;
  }
}

export const actions = {
  sendMessageCreator: (newMessageBody: string) => ({ type: 'sn/dialogs/SEND-MESSAGE', newMessageBody } as const)
};

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;