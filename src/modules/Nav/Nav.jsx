import c from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>Profile</div>
      <div className={`${c.item} ${c.active}`}>Messages</div>
      <div className={c.item}>News</div>
      <div className={c.item}>Music</div>
    </nav>
  )
}

export default Nav;