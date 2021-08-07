import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

type PropsType = {
  isAuth: boolean
  login: string
  logout: () => void
};

const Header: React.FC<PropsType> = (props) => {
  return (
    <header className={s.header}>
      <NavLink to={'/'}><img src={logo} alt='Logo'/></NavLink>
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;