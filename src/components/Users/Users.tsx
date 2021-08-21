import styles from './Users.module.css';
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/type';
import { UsersSearchForm } from './UsersSearchForm';
import { FilterType } from '../../redux/users-reducer';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UserType>
  onPageChanged: (pageNumber: number) => void
  onFilterChanged: (filter: FilterType) => void
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({
                                      onPageChanged,
                                      totalUsersCount,
                                      pageSize,
                                      currentPage,
                                      users,
                                      onFilterChanged,
                                      ...props
                                    }) => {

  return <div className={styles.wrapper}>

    <UsersSearchForm onFilterChanged={onFilterChanged}/>

    <Paginator onPageChanged={onPageChanged}
               totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage} />
    <div className={styles.usersWrapper}>
      {
        users.map(u => <User key={u.id}
                             user={u}
                             followingInProgress={props.followingInProgress}
                             unfollow={props.unfollow}
                             follow={props.follow} />
        )
      }
    </div>
    <Paginator onPageChanged={onPageChanged}
               totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage} />
  </div>
}

export default Users;