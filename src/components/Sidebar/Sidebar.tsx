import s from './Sidebar.module.css';
import Navbar from './Nav/Navbar';
import Friends from './Friends/Friends';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { requestFriends } from '../../redux/sidebar-reducer';
import { UserType } from '../../types/type';
import { follow, unfollow } from '../../redux/users-reducer';

type MapStatePropsType = {
  myFriends: Array<UserType>
  followingInProgress: number[]
};

type MapDispatchPropsType = {
  requestFriends: () => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
};

type OwnPropsType = {
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;


const Sidebar: React.FC<PropsType> = (props) => {
  // @ts-ignore
  return (
    <div className={s.sidebar}>
      <Navbar />
      <Friends myFriends={props.myFriends}
               requestFriends={props.requestFriends}
               follow={props.follow}
               unfollow={props.unfollow}
               followingInProgress={props.followingInProgress} />
    </div>
  )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    myFriends: state.sidebar.myFriends,
    followingInProgress: state.userPage.followingInProgress
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    requestFriends, follow, unfollow
  })
)(Sidebar)