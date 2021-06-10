import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

  return <div className={styles.wrapper}>
    <Paginator onPageChanged={props.onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}/>
    <div className={styles.content}>
    {
      props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                   alt="Some img"/>
                </NavLink>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': '91cc1011-293a-4a6f-955d-371d85cc4175'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode == 0) {
                        props.unfollow(u.id)
                      }
                    });



                }}>Unfollow</button>
                : <button onClick={() => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': '91cc1011-293a-4a6f-955d-371d85cc4175'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id)
                      }
                    });

                }}>Follow</button>}

            </div>
          </span>
        <span>
            <span>
              <div>
                {u.name}
              </div>
              <div>
                {u.status}
              </div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>

      </div>)
    }
    </div>
    <Paginator onPageChanged={props.onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}/>
  </div>
}

export default Users;