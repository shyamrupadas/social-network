import s from './Sidebar.module.css';
import Navbar from './Nav/Navbar';
import Friends from './Friends/Friends';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className={s.sidebar}>
      <Navbar />
      <Friends />
    </div>
  )
}

export default Sidebar;