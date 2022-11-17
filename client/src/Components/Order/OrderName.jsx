import React from 'react'
import { useDispatch } from 'react-redux'
import { orderName } from '../../redux/actions'
import styles from './OrderName.module.css'

function OrderName() {

  const dispatch = useDispatch()

 function handleOrdenar(e){
   e.preventDefault()
   dispatch(orderName(e.target.value))
 }

  return (
    <div>
        
        <select onChange={(e)=> handleOrdenar(e)} className={styles.select}>
                <option value='all'>Alphabetically</option>
                <option value='asc'> A a Z  </option>
                <option value='desc'> Z a A  </option>
            </select>
    </div>
  )
}

export default OrderName