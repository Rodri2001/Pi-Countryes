import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, } from '../../redux/actions'
import styles from "./Cards.module.css"
import Card from '../Card/Card'

function Cards() {

    const countries = useSelector((state) => state.countries)
    const pagesState = useSelector((state) => state.paginate)
    const dispatch = useDispatch()

    const [current, setCurrent] = useState(1)

    const totalCards = countries.length
    const pages = []

    for (let i = 1; i <= Math.ceil(totalCards / 10); i++) {
        pages.push(i)
    }

    function paginate(pageNumber) {
        if (pageNumber > pages.length || pageNumber < 1) { return }
        return setCurrent(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className={styles.cards}>
            <div className={styles.cardscontainer} >
                {countries && (pagesState.length ? pagesState : countries).map((e, i) => {
                    if (i >= current * 10 - 10 && i < current * 10) {
                        return <Card
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
                        />
                    } else {
                        return false
                    }
                })}
            </div>
            <div className={styles.paginate}>
                <button onClick={() => paginate(current - 1)}>BACK</button>
                {pages.map(page => (
                    <div className={styles.paginateButtons} key={page}>
                        <a className={styles.buttons} onClick={() => paginate(page)} key={page} >
                            {page}
                        </a>
                    </div>
                ))}
                <button onClick={() => paginate(current + 1)}>NEXT</button>
            </div>
        </div>
    )
}

export default Cards