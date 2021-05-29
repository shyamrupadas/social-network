import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers(
      [{
        id: 1,
        followed: false,
        fullName: 'Vasiliy Ivanovich',
        photoUrl: 'https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg',
        status: 'I\'m a man',
        location: {country: 'Russia', city: 'Moscow'}
      },
        {
          id: 2,
          followed: true,
          fullName: 'Petyka',
          photoUrl: 'https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg',
          status: 'I\'m a little man',
          location: {country: 'Russia', city: 'Uryupinsk'}
        },
        {
          id: 3,
          followed: false,
          fullName: 'Bill Gates',
          photoUrl: 'https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg',
          status: 'I\'m a boss',
          location: {country: 'USU', city: 'New-York'}
        },
      ]);
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} alt="Some img"/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

            </div>
          </span>
          <span>
            <span>
              <div>
                {u.fullName}
              </div>
              <div>
                {u.status}
              </div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>

        </div>)
      }
    </div>
  )
}

export default Users;