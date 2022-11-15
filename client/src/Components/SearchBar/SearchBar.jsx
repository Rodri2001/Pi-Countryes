import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountriesName } from '../../redux/actions'

function SearchBar() {
    const [pais, setPais] = useState({
        search: ""
    })
    const dispatch = useDispatch()

    
    const handleSearch = (e) => {
        e.preventDefault()
        setPais({
            ...pais,
            [e.target.name ]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(pais,"paisa xd")
        dispatch(getCountriesName(pais.search))
      }
console.log(pais,22)
    return (
        <div>
            <form onClick={(e) => handleSubmit(e)}>
                <div>
                    <input onChange={handleSearch} type="text" name='search'></input>
                    <button type="submit">Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar