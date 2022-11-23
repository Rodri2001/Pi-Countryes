import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allActivity, filterActivity } from '../../redux/actions'

function FilterActivitys() {

    const activity = useSelector((state) => state.allactivity)
    const dispatch = useDispatch()
     
    const allactivitie = activity.map((e) => e.name)
    const state = new Set(allactivitie)
    
    useEffect(()=>{
     dispatch(allActivity())
    },[dispatch])
    

    function handleChange(e){
      e.preventDefault()
      dispatch(filterActivity(e.target.value))
    }

  return (
    <div>
        <select onChange={(e) => handleChange(e)}>
            <option value="all">Filtrar Actividades</option>
            { [...state].map((e) => (<option key={e} value={e}>{e}</option>))}      
        </select>
    </div>
  )
}

export default FilterActivitys