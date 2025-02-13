import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/NavBar.module.css'


export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link className={styles.navbarItem} to="/">Home</Link>
      <Link className={styles.navbarItem} to="/projects">Projects</Link>
      <Link className={styles.navbarItem} to="/contact">Contact</Link>
    </nav>
  )
}