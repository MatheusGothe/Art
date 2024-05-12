import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {MdOutlineLightMode,MdDarkMode} from 'react-icons/md'
import {BsMoonFill} from 'react-icons/bs'
import Switch from 'react-switch'


const Navbar = () => {

  return (
    <nav
      className={styles.navbar_container_light}
    >
      <ul className={styles.nav_links}>
        <li >
          <Link to={"/"}>Home</Link>
        </li>
        <li >
          <Link to={"/favorites"}>Favorites</Link>
        </li>
      </ul>
      <div className={styles.icon}>
      </div>
    </nav>
  );
}

export default Navbar
