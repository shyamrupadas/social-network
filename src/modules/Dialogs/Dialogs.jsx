import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  const messagesElements = props.state.messages.map(m => <Message msg={m.message}/>);

  let newMessage = React.createRef();

  const addMesssage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea ref={newMessage} placeholder='Напишите сообщение!'></textarea>
        <div>
          <button onClick={addMesssage}>Отправить!</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;