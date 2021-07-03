import styles from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

  return <div className={styles.wrapper}>
    <Paginator onPageChanged={props.onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}/>
    <div>
    {
      props.users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgress={props.followingInProgress}
                                 unfollow={props.unfollow}
                                 follow={props.follow} />
      )
    }
    </div>
    <Paginator onPageChanged={props.onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}/>
  </div>
}

export default Users;