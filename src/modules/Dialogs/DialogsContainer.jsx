import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

   return <StoreContext.Consumer>
     { store => {

      let state = store.getState().dialogsPage;

      const onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
      };

      const onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageCreator(body));
      };

      return (
      <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} state={state}
               dialogs={state.dialogs} messages={state.messages}
               newMessageBody={state.newMessageBody} />
      )
    }

  }
  </StoreContext.Consumer>
}

export default DialogsContainer;