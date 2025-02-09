import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from '../css/NavBar.module.css'


export function NavBar() {
  return (
    <nav className={ styles.navBar}>
      <div className={ styles.navBarMainContent}>
        <div className={styles.navBarMenu}>
          <Link className={styles.navbarItem} to="/">Home</Link>
          <Link className={styles.navbarItem} to="/lunar-lander">Lunar Lander</Link>
          <Link className={styles.navbarItem} to="/military-classifier">Military Vehicle Image Classifier</Link>
        </div>
      </div>
    </nav>
  )
}