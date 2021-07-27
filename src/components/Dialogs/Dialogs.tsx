import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React from "react";
import { InjectedFormProps, reduxForm, SubmitHandler } from "redux-form";
import { createField, Textarea } from "../common/FormsContrls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { DialogType, InitialStateType, MessageType } from '../../redux/dialogs-reducer';

type PropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  sendMessage: (newMessageBody: string) => void
};

type DialogsFormValuesType = {
  newMessageBody: string
};

const Dialogs: React.FC<PropsType> = (props) => {
  const dialogsElements = props.dialogs.map((d: { name: string; id: number; }) =>
    <DialogItem name={d.name} key={d.id} id={d.id}/>);
  const messagesElements = props.messages.map((m: { message: string; id: number; }) =>
    <Message msg={m.message} key={m.id}/>);

  const addNewMessage = (values: DialogsFormValuesType) => {
    props.sendMessage(values.newMessageBody)
  };

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

type DialogsFormValuesKeysType = Extract<keyof DialogsFormValuesType, string>;
type DialogsFormPropsType = {};

type DialogsFormPropsType1 = {
  handleSubmit: SubmitHandler<{}, {}, string>
}

const DialogsForm: React.FC<InjectedFormProps<DialogsFormValuesType, DialogsFormPropsType> & DialogsFormPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>{createField<DialogsFormValuesKeysType>('Напишите сообщение!',
        'newMessageBody', [required, maxLength50], Textarea)}</div>
      <div>
        <button>Отправить!</button>
      </div>
    </form>
  )
}

const DialogsReduxForm = reduxForm<DialogsFormValuesType, DialogsFormPropsType>({ form: 'dialogs' })(DialogsForm)

export default Dialogs;