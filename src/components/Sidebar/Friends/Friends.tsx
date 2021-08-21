import s from './Friends.module.css';
import Friend from './Friend/Friend';
import React, { useEffect } from 'react';
import { UserType } from '../../../types/type';

type PropsType = {
  myFriends: Array<UserType>
  requestFriends: () => void
}

const Friends: React.FC<PropsType> = ({ myFriends, requestFriends }) => {

  useEffect(() => {
    requestFriends();
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        My friends:
      </div>
      <div className={s.content}>
        {myFriends.map((f) => <Friend key={f.id} name={f.name} smallPhoto={f.photos.small} id={f.id} />)}
      </div>
    </div>
  )
}

export default Friends;