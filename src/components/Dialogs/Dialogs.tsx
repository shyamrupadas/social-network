import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import { Field, reduxForm, SubmitHandler } from "redux-form";
import { Textarea } from "../common/FormsContrls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

type DialogType = {
  id: number
  name: string
};
type MessageType = {
  id: number
  message: string
};
type PropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  sendMessage: (newMessageBody: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {
  const dialogsElements = props.dialogs.map((d: { name: string; id: number; }) =>
    <DialogItem name={d.name} key={d.id} id={d.id}/>);
  const messagesElements = props.messages.map((m: { message: string; id: number; }) =>
    <Message msg={m.message} key={m.id}/>);

  const addNewMessage = (values: any) => {
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

const maxLength50 = maxLengthCreator(50)

type DialogsFormPropsType = {
  handleSubmit: SubmitHandler<{}, {}, string>
}

const DialogsForm: React.FC<DialogsFormPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Textarea} placeholder='Напишите сообщение!' name='newMessageBody'
                  validate={[required, maxLength50]}/></div>
      <div>
        <button>Отправить!</button>
      </div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm)

export default Dialogs;