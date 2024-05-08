import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {MdOutlineLightMode,MdDarkMode} from 'react-icons/md'
import {BsMoonFill} from 'react-icons/bs'
import Switch from 'react-switch'


const Navbar = ({onThemeChange}) => {

    const [theme,setTheme] = useState('light')

    const handleTheme = () => {
        let newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.toggle('dark-mode');
        onThemeChange(newTheme);
      }
      

  return (
    <nav
      className={
        theme == "light"
          ? styles.navbar_container_light
          : styles.navbar_container_dark
      }
    >
      <ul className={styles.nav_links}>
        <li className={theme == "dark" ? styles.li_dark : ""}>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={theme == "dark" ? styles.li_dark : ""}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={theme == "dark" ? styles.li_dark : ""}>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className={styles.icon}>
        {/* {theme == 'light' ? ( */}
        <Switch
          height={25}
          width={40}
          checked={theme === "dark"}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MdOutlineLightMode fontSize={15} />
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <BsMoonFill fontSize={15} />
            </div>
          }
          handleDiameter={20}
          onChange={handleTheme}
        />
      </div>
    </nav>
  );
}

export default Navbar
