import s from './Friend.module.css';
import React from 'react';
import userPhoto from '../../../../assets/images/user.jpg';
import styles from '../../../Users/Users.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  name: string
  smallPhoto: string | null
  id: number
};

const Friend: React.FC<PropsType> = ({ name, smallPhoto, id }) => {
  return (
    <div className={s.item}>
      <NavLink to={'/profile/' + id}>
      <img src={smallPhoto || userPhoto} className={styles.userPhoto} alt='Ava' />
      <span>{name}</span>
      </NavLink>

    </div>
  )
}

export default Friend;