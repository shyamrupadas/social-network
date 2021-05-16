import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>Profile</div>
      <div className={`${s.item} ${s.active}`}>Messages</div>
      <div className={s.item}>News</div>
      <div className={s.item}>Music</div>
    </nav>
  )
}

export default Nav;