import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  const messagesElements = props.dialogsPage.messages.map(m => <Message msg={m.message} key={m.id}/>);


  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <DialogsReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder='Напишите сообщение!' name='newMessageBody' component='textarea'/></div>
      <div><button>Отправить!</button></div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default Dialogs;