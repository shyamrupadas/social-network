import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsContrls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

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

const maxLength100 = maxLengthCreator(100)

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Textarea} placeholder='Напишите сообщение!' name='newMessageBody'
                  validate={[required, maxLength100]} /></div>
      <div><button>Отправить!</button></div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default Dialogs;