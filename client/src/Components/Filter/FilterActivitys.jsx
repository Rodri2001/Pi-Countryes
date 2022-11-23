import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allActivity, filterActivity } from '../../redux/actions'

function FilterActivitys() {

    const activity = useSelector((state) => state.allactivity)
    const dispatch = useDispatch()
     
    const allactivitie = activity.map((e) => e.name)
    const state = new Set(allactivitie)
    console.log(state,2)
    useEffect(()=>{
     dispatch(allActivity())
    },[dispatch])
    

    function handleChange(e){
      console.log(e.target.value,"soy value")
      e.preventDefault()
      dispatch(filterActivity(e.target.value))
    }
    // console.log(activity,"actividad")

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