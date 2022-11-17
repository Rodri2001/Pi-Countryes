import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allActivity } from '../../redux/actions'

function FilterActivitys() {

    const activity = useSelector((state) => state.allactivity)
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(allActivity())
    },[dispatch])
    
    console.log(activity,"actividad")

  return (
    <div>
        <select>
            <option>Todas Las Actividades</option>
            { activity.map((e) => (<option key={e.id} value={e.name}>{e.name}</option>))}      
        </select>
    </div>
  )
}

export default FilterActivitys