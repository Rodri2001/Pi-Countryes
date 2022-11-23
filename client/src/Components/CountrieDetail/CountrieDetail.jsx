import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CountrieDetail.module.css'

function CountrieDetail({ id, name, img, continent, capital, subregion, area, population, activities,codigo }) {

  return (
    <div className={styles.origin}>
    <div className={styles.container}>
      <div className={styles.NavBar}>
        <Link to='/Home' >
          <button>Home</button>
        </Link>
        <Link to='/CreateActivity'>
          <button>Create</button>
        </Link>
      </div>
      <div className={styles.card}>
        <h4>Codigo del Pais: {codigo}</h4>
        <h3>{name}</h3>


        <img className={styles.img} src={img}></img>
        <div>
          <p>Continente : {continent}</p>
          <p>Capital : {capital}</p>
          <p>Subregion : {subregion}</p>
          <p>Área : {area} Km2</p>
          <p>Poblacion : {population}</p>
          <div>{activities?.length ? <p>Actividad: </p> : null}{activities?.length ? activities.map((e) => <ul>
            <li>Nombre: {e.name}</li>
            <li>Dificultad: {e.difficulty}</li>
            <li>Duracion: {e.duration}</li>
            <li>Temporada: {e.season}</li>
          </ul>) : <p>No hay actividades</p>}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CountrieDetail