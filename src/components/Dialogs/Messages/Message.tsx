import s from './../Dialogs.module.css'
import React from 'react';

type PropsType = {
  msg: string
  key: number
};

const Message: React.FC<PropsType> = (props) => {

  return (
    <div className={s.message}>{props.msg}</div>
  )
}

export default Message;