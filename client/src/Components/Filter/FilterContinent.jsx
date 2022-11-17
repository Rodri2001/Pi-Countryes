import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtercontinent, getCountries } from '../../redux/actions'

function FilterContinent() {

  const countries = useSelector((state) => state.countries)
  const dispatch = useDispatch()

  
  let continents = countries.map((e) => e.continent)
  console.log(continents, "soy continents")
  continents = continents.filter((item, index) => continents.indexOf(item) === index)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  function filterAllcontinent(e) {
  e.preventDefault()
  dispatch(filtercontinent(e.target.value))
  }

  return (
    <div>
      <select onChange={(e) => filterAllcontinent(e)}>
        <option value="all" >All</option>
        {continents.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
    </div>
  )
}

export default FilterContinent