import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i=1; i <= pagesCount; i++) {
    pages.push(i)
  }

  // TODO добавить hover
  // TODO вынести paginator в отдельнй компонент

  return <div className={styles.wrapper}>
    <div className={styles.paginator}>

      <span onClick={() => {
        props.onPageChanged(1);
      }}>First </span>

      <span onClick={() => {
        if (props.currentPage > 1) {
          props.onPageChanged(props.currentPage - 1);
        }
      }}>Prev. </span>

      {pages.map(p => {
        if ((props.currentPage - p) < 2  && (p - props.currentPage) < 2) {
          return <span className={props.currentPage === p && styles.selectedPage}
                       onClick={(e) => {props.onPageChanged(p)}}>{p + " "}
          </span>
        }
      })}
      <span onClick={() => {
        if (props.currentPage < pagesCount) {
          props.onPageChanged(props.currentPage + 1);
        }

      }}>Next </span>
      <span onClick={() => {
        props.onPageChanged(pagesCount);
      }}>Last</span>
    </div>
    {
      props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                   alt="Some img"/>
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
}

export default Users;