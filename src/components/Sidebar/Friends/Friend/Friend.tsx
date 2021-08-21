import s from './Friend.module.css';
import React from 'react';
import userPhoto from '../../../../assets/images/user.jpg';
import styles from '../../../Users/Users.module.css';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../../types/type';

type PropsType = {
  name: string
  smallPhoto: string | null
  id: number
  user: UserType
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  requestFriends: () => void
};

const Friend: React.FC<PropsType> = ({
                                       name, smallPhoto, id,
                                       user, followingInProgress, follow, unfollow, requestFriends
                                     }) => {
  const onUnfollow = (id: number) => {
    unfollow(id)
    requestFriends();
  }

  return (
    <div className={s.item}>
      <div>
        <NavLink to={'/profile/' + id}>
          <img src={smallPhoto || userPhoto} className={styles.userPhoto} alt='Ava' />
          <span>{name}</span>
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={followingInProgress
            .some(id => id === user.id)}
                    onClick={() => {
                      onUnfollow(user.id);
                    }}>
            Unfollow</button>
          : <button disabled={followingInProgress
            .some(id => id === user.id)} onClick={() => {
            follow(user.id);
          }}>
            Follow</button>}
      </div>
    </div>
  )
}

export default Friend;