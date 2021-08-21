import s from './Sidebar.module.css';
import Navbar from './Nav/Navbar';
import Friends from './Friends/Friends';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { requestFriends } from '../../redux/sidebar-reducer';
import { UserType } from '../../types/type';

type MapStatePropsType = {
  myFriends: Array<UserType>
};

type MapDispatchPropsType = {
  requestFriends: () => void
};

type OwnPropsType = {
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;


const Sidebar: React.FC<PropsType> = (props) => {
  // @ts-ignore
  return (
    <div className={s.sidebar}>
      <Navbar />
      <Friends myFriends={props.myFriends} requestFriends={props.requestFriends} />
    </div>
  )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    myFriends: state.sidebar.myFriends
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    requestFriends
  })
)(Sidebar)