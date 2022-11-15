import React from 'react'

function CountrieDetail({ id, name, img, continent, capital, subregion, area, population, activities }) {
  console.log(activities && activities[0],22)
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div><img src={img}></img></div>
      <ul>
        <p>continent : {continent}</p>
        <p>capital : {capital}</p>
        <p>subregion : {subregion}</p>
        <p>area : {area}</p>
        <p>population : {population}</p>
        <p>activities : {activities && activities.map((e) => <ul>
          <li>Name: {e.name}</li>
          <li>Difficulty: {e.difficulty}</li>
          <li>duration: {e.duration}</li>
          <li>Season: {e.season}</li>
        </ul>)}</p>
      </ul>
    </div>
  )
}

export default CountrieDetail