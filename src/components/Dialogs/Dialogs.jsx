import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  const messagesElements = props.dialogsPage.messages.map(m => <Message msg={m.message} key={m.id}/>);

  const onSendMessageClick = () => {
    props.sendMessage()
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to='/login'/>;

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea placeholder='Напишите сообщение!' value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange}/>
        <div>
          <button onClick={onSendMessageClick}>Отправить!</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;