import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries } from '../../redux/actions'
import FilterActivitys from '../Filter/FilterActivitys'
import FilterContinent from '../Filter/FilterContinent'
import OrderName from '../Order/OrderName'
import OrderPoblation from '../Order/OrderPoblation'
import SearchBar from '../SearchBar/SearchBar'
import styles from "./NavBar.module.css"

function NavBar() {
  const dispatch = useDispatch()

  function handleChange(e){
   dispatch(getCountries())
  }

  return (
    <div className={styles.NavBar}>
      <SearchBar />
      <div>
        <Link to="/CreateActivity">
          <button>CrearActividad</button>
        </Link>
        <Link to="/Home">
          <button onClick={handleChange}>Inicio</button>
        </Link>
      </div>
      <div>
      <OrderName/>
      <OrderPoblation/>
      </div>
      <div>
        <FilterContinent/>
        <FilterActivitys/>
      </div>
    </div>
  )
}

export default NavBar