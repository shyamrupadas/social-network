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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Shyam Rupa' id='1'/>
        <DialogItem name='Vasliy' id='2'/>
        <DialogItem name='Uncle Gena' id='3'/>
        <DialogItem name='Валера' id='4'/>
        <DialogItem name='Иван Викторович' id='5'/>
      </div>
      <div className={s.messages}>
        <Message msg='Hello'/>
        <Message msg="What' s up?"/>
      <Message msg='Merhaba'/>
      <Message msg='Namaste!'/>
      <Message msg='Hari-bol!'/>
    </div>
</div>
)
}

export default Dialogs;