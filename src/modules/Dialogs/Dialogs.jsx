import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.msg}</div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Shyam Rupa'},
    {id: 2, name: 'Vasliy'},
    {id: 3, name: 'Uncle Gena'},
    {id: 4, name: 'Валера'},
    {id: 5, name: 'Иван Викторович'},
  ];

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'What\' s up?'},
    {id: 3, message: 'Merhaba'},
    {id: 4, message: 'Namaste!'},
    {id: 5, message: 'Hari-bol!'},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
      </div>
      <div className={s.messages}>
        <Message msg={messagesData[0].message}/>
        <Message msg={messagesData[1].message}/>
        <Message msg={messagesData[2].message}/>
        <Message msg={messagesData[3].message}/>
        <Message msg={messagesData[4].message}/>
      </div>
    </div>
  )
}

export default Dialogs;