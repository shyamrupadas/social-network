import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/state";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  const messagesElements = props.dialogsPage.messages.map(m => <Message msg={m.message}/>);

   const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
      props.dispatch(updateNewMessageCreator(body));
  };

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea placeholder='Напишите сообщение!' value={props.dialogsPage.newMessageText} onChange={onNewMessageChange}/>
        <div>
          <button onClick={onSendMessageClick}>Отправить!</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;