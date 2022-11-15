import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Card.module.css"

function Card({ name, img, id, key, activities, area, capital, continent, subregion }) {
    return (
        <div className={styles.container}>
            <div className={styles.Card}>

                <Link to={`/Detail/${id}`}>
                 <button>Detail</button>
                 </Link>

                <h3>{name}</h3>
            </div>
            <div>
                <img className={styles.img} src={img}></img>
            </div>
            <div>
                <p>Continente: {continent}</p>
            </div>
        </div>
    )
}

export default Card