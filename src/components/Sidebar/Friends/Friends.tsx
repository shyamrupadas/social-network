import s from './Friends.module.css';
import Friend from './Friend/Friend';
import React from 'react';

const Friends: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        Friends:
      </div>
      <div className={s.content}>
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  )
}

export default Friends;