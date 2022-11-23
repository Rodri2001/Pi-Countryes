import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Landing.module.css"

function Landing() {
  return (
    <div className={styles.Landing}>
    <div className={styles.container}>
      <h1 className={styles.title}> Paises </h1>
      <Link to="/Home">
        <button className={styles.button}>Home</button>
      </Link>
      </div>
    </div>
  )
}

export default Landing