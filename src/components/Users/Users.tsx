import styles from './Users.module.css';
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/type';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  follow: () => void
  unfollow: () => void
}

let Users: React.FC<PropsType> = ({
                                    onPageChanged,
                                    totalUsersCount,
                                    pageSize,
                                    currentPage,
                                    users,
                                    ...props
                                  }) => {

  return <div className={styles.wrapper}>
    <Paginator onPageChanged={onPageChanged}
               totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage}/>
    <div className={styles.usersWrapper}>
      {
        users.map(u => <User key={u.id}
                                   user={u}
                                   followingInProgress={props.followingInProgress}
                                   unfollow={props.unfollow}
                                   follow={props.follow}/>
        )
      }
    </div>
    <Paginator onPageChanged={onPageChanged}
               totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage}/>
  </div>
}

export default Users;