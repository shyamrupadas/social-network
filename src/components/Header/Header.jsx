import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to={'/'}><img src={logo} alt='Logo'/></NavLink>
      <div className={s.loginBlock}>
        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;