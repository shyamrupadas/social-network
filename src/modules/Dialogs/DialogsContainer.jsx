import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  };

  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageCreator(body));
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} state={state}
                  dialogs={state.dialogs} messages={state.messages}
                  newMessageBody={state.newMessageBody}/>
}

export default DialogsContainer;