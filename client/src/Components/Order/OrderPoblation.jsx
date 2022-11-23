import React from 'react'
import { useDispatch } from 'react-redux'
import { orderPopulation } from '../../redux/actions'

function OrderPoblation() {

  const dispatch = useDispatch()

  function handleOrdenar(e) {
    e.preventDefault()
    dispatch(orderPopulation(e.target.value))
  }
  return (
    <div>
      <select onChange={(e) => handleOrdenar(e)}>
        <option value="all">Ordernar por Poblacion</option>
        <option value="asc" >Menor Poblacion</option>
        <option value="desc" >Mayor Poblacion</option>
      </select>
    </div>
  )
}

export default OrderPoblation