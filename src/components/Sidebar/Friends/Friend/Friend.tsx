import s from './Friend.module.css';
import React from 'react';

const Friend: React.FC = () => {
  return (
    <div className={s.item}>
      <img src='https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg' alt='Ava'/>
    </div>
  )
}

export default Friend;