import React, {useState } from 'react'
import { useDispatch} from 'react-redux'
import {getCountriesName } from '../../redux/actions'

function SearchBar() {
    const [pais, setPais] = useState({
        search: ""
    })
    const dispatch = useDispatch()


    const handleSearch = (e) => {
        e.preventDefault(pais.length,"sas")
        setPais({
                ...pais,
                [e.target.name ]: e.target.value
            })          
    }
    function handleSubmit(e) {
        e.preventDefault()
            dispatch(getCountriesName(pais.search))        
      }

      
    return (
        <div>
            <form onClick={(e) => handleSubmit(e)}>
                <div>
                    <input onChange={(e) => handleSearch(e)} type="text" name='search'></input>
                    <button >Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar