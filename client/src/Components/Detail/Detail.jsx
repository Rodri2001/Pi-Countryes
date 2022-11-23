import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clear, getCountriesID } from '../../redux/actions'
import CountrieDetail from '../CountrieDetail/CountrieDetail'

function Detail() {
    const countriesID = useSelector((state) => state.countriesID)
    const dispatch = useDispatch()

    let { id } = useParams();
    useEffect(() => {
        dispatch(getCountriesID(id))
    },[dispatch])

   
  return (
    <div>
        <div>   
           <CountrieDetail 
            id={countriesID.id}
            codigo={countriesID.codigo}
            name={countriesID.name}
            img={countriesID.imgflag}
            continent={countriesID.continent}
            capital={countriesID.capital}
            subregion={countriesID.subregion}
            area={countriesID.area}
            population={countriesID.population}
            activities={countriesID.activities}
           />
        </div>
    </div>
  )
}

export default Detail