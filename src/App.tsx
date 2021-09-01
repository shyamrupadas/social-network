import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import { UsersPage } from './components/Users/UsersPage';
import HeaderContainer from './components/Header/HeaderContainer';
import { LoginPage } from './components/Login/LoginPage';
import React, { Component, Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void
};

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Произошла ошибка!');
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
          </Suspense>
          <Route exact path='/' render={() => <Redirect to={'/profile'} />} />
          <Route path='/users' render={() => <UsersPage pageTitle={'My social network'} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SocialNetworkApp: React.FC = () => {
  return <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default SocialNetworkApp;