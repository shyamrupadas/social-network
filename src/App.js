import './App.css';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
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
        <Sidebar/>
        <div className='app-wrapper-content'>
          {/*<Switch>*/}
          <Suspense fallback={<Preloader />}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer /> } />
            <Route path='/dialogs' render={() => <DialogsContainer />}/>
          </Suspense>
          <Route exact path='/' render={() => <Redirect to={'/profile'} />} />
          <Route path='/users' render={() => <UsersContainer pageTitle={'My social network'} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <LoginPage />} />
          {/*<Route path='*' render={() => <div>404 - PAGE NOT FOUND</div>} />*/}
          {/*</Switch>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SocialNetworkApp = () => {
  return <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </HashRouter>
  </React.StrictMode>
}

export default SocialNetworkApp;