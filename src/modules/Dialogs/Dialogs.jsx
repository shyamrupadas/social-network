import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  const messagesElements = props.state.messages.map(m => <Message msg={m.message}/>);

  const onSendMessageClick = () => {
    props.sendMessage()
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea placeholder='Напишите сообщение!' value={props.state.newMessageBody} onChange={onNewMessageChange}/>
        <div>
          <button onClick={onSendMessageClick}>Отправить!</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;