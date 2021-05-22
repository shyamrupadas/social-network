import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  const messagesElements = props.dialogsPage.messages.map(m => <Message msg={m.message}/>);

  let newMessage = React.createRef();

  const addMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
  };

  const onMessageChange = () => {
    let text = newMessage.current.value;
    let action = { type: 'UPDATE-NEW-MESSAGE', newText: text };
    props.dispatch(action);
  };

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea ref={newMessage} placeholder='Напишите сообщение!' value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
        <div>
          <button onClick={addMessage}>Отправить!</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;