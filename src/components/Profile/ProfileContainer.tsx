import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ProfileType } from '../../types/type';

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (text: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
};

type PathParamsType = {
  userId: string
};

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizerUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    if (!userId) {
      console.error(`ID should exist in URI params or state('authorizedUserId')`);
    } else {
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  };

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  };

  render() {
    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               savePhoto={this.props.savePhoto}/>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizerUserId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer);