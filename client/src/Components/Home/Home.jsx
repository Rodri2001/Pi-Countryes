import Cards from '../Cards/Cards'
import styles from './Home.module.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions'



function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getCountries())
  },[dispatch])

  return (
    <div>
    <h1 className={styles.title}>Paises 🌎</h1>
    <Cards/>
    </div>
  )
}

export default Home