import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/type";

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

let User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {

  return (
    <div className={styles.userWrapper}>
      <div className={styles.userElement}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small || userPhoto} className={styles.userPhoto}
               alt="Some img"/>
        </NavLink>
      </div>
      <div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress
              .some(id => id === user.id)}
                      onClick={() => {
                        unfollow(user.id);
                      }}>
              Unfollow</button>
            : <button disabled={followingInProgress
              .some(id => id === user.id)} onClick={() => {
              follow(user.id);
            }}>
              Follow</button>}
        </div>
        <div>
          {user.name}
        </div>
        <div>
          {user.status}
        </div>

      </div>
    </div>)
}

export default User;