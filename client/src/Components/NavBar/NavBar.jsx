import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <SearchBar />
      <div>
        <Link to="/CreateActivity">
          <button>CrearActividad</button>
        </Link>
        <Link to="/Home">
          <button>Inicio</button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar