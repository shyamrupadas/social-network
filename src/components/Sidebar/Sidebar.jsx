import s from './Sidebar.module.css';
import Navbar from "./Nav/Navbar";
import Friends from "./Friends/Friends";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <Navbar/>
      <Friends/>
    </div>
  )
}

export default Sidebar;