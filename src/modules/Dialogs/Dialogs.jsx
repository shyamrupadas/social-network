import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Shyam Rupa</div>
        <div className={s.dialog}>Vasliy</div>
        <div className={s.dialog}>Uncle Gena</div>
        <div className={s.dialog}>Valdemar</div>
        <div className={s.dialog}>Tatyana</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>What's up?</div>
        <div className={s.message}>Merhaba</div>
        <div className={s.message}>Namaste!</div>
      </div>
    </div>
  )
}

export default Dialogs;