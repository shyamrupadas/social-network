import styles from './Users.module.css';
import React, { useEffect } from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';
import { FilterType, requestUsers } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter
} from '../../redux/users-selectors';
import { useHistory } from 'react-router-dom';


export const Users: React.FC = () => {

  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    history.push({
      pathname: '/users',
      search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    })
  }, [filter, currentPage]);

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter))
  }, []);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  const follow = (userId: number) => {
    dispatch(follow(userId));
  };

  const unfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };

  return <div className={styles.wrapper}>

    <UsersSearchForm onFilterChanged={onFilterChanged} />

    <Paginator onPageChanged={onPageChanged}
               totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage} />
    <div className={styles.usersWrapper}>
      {
        users.map(u => <User key={u.id}
                             user={u}
                             followingInProgress={followingInProgress}
                             unfollow={unfollow}
                             follow={follow} />
        )
      }
    </div>
    <Paginator onPageChanged={onPageChanged}
               totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage} />
  </div>
}