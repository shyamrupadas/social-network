import React from 'react';
import {connect} from 'react-redux';
import {
  follow, getUsers, setCurrentPage, setTotalUsersCount,
  setUsers, toggleFollowingInProgress,
  toggleIsFetching, unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress
  }
}

export default connect(mapStateToProps,
  {follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching, getUsers})(UsersContainer);