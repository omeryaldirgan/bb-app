import React from "react";
import {Link} from "react-router-dom";
import styles from './nav.module.scss'
const Nav=({children})=>(
    <nav className={styles.navigation}>
      <Link to="/" className={styles.navigation__logo}  title="lorem">{children}</Link>
    </nav>
)

export default Nav;