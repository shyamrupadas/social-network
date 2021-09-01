import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, NavLink, Redirect, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { UsersPage } from './components/Users/UsersPage';
import { LoginPage } from './components/Login/LoginPage';
import React, { Component, Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import { Layout, Menu } from 'antd';
import s from './components/Sidebar/Nav/Navbar.module.css';

const { Header, Content, Footer, Sider } = Layout;

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
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="1"><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to='/users' activeClassName={s.active}>Users</NavLink></Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
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
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      // <div className='app-wrapper'>
      //   <HeaderContainer />
      //   <Sidebar />
      //   <div className='app-wrapper-content'>
      //     <Suspense fallback={<Preloader />}>
      //       <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      //       <Route path='/dialogs' render={() => <DialogsContainer />} />
      //     </Suspense>
      //     <Route exact path='/' render={() => <Redirect to={'/profile'} />} />
      //     <Route path='/users' render={() => <UsersPage pageTitle={'My social network'} />} />
      //     <Route path='/news' render={() => <News />} />
      //     <Route path='/music' render={() => <Music />} />
      //     <Route path='/settings' render={() => <Settings />} />
      //     <Route path='/login' render={() => <LoginPage />} />
      //   </div>
      // </div>
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