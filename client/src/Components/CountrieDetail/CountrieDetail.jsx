import React from 'react'

function CountrieDetail({ id, name, img, continent, capital, subregion, area, population, activities }) {

  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
      <img src={img}></img>
      </div>
      <div>
        <p>continent : {continent}</p>
        <p>capital : {capital}</p>
        <p>subregion : {subregion}</p>
        <p>area : {area}</p>
        <p>population : {population}</p>
        <div>activities : {activities && activities.map((e) => <ul>
          <li>Name: {e.name}</li>
          <li>Difficulty: {e.difficulty}</li>
          <li>duration: {e.duration}</li>
          <li>Season: {e.season}</li>
        </ul>)}</div>
      </div>
    </div>
  )
}

export default CountrieDetail