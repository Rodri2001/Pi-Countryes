import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, } from '../../redux/actions'
import Card from '../Card/Card'

function Cards() {

    const countries = useSelector((state) => state.countries)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div>
            <div>{countries.map((e) => <Card
                id={e.id}
                name={e.name}
                key={e.id}
                img={e.imgflag}
                continent={e.continent}
                capital={e.capital}
                subregion={e.subregion}
                area={e.area}
                population={e.population}
                activities={e.activities}
            />)}</div>
        </div>
    )
}

export default Cards