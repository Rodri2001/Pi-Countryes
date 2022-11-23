import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allActivity, filterActivity } from '../../redux/actions'

function FilterActivitys() {

    const activity = useSelector((state) => state.allactivity)
    const dispatch = useDispatch()

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
            { activity.map((e) => (<option key={e.id} value={e.name}>{e.name}</option>))}      
        </select>
    </div>
  )
}

export default FilterActivitys