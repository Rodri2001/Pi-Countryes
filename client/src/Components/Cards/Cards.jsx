import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Cards.module.css"
import Card from '../Card/Card'

function Cards() {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const [currentPage, setCurrentPage] = useState(1)
    let countriesLength = 9


    const totalCards = countries.length
    const pages = []

    for (let i = 1; i <= Math.ceil(totalCards / 10); i++) {
        pages.push(i)
    }

    function paginate(pageNumber) {
        if (pageNumber > pages.length || pageNumber < 1) { return }
        return setCurrentPage(pageNumber)
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [dispatch, countries])

    return (
        <div className={styles.cards}>
            <div className={styles.cardscontainer} >
                {countries && (countries).map((e, i) => {
                    console.log(i, 22)
                    if (currentPage > 1) {
                        countriesLength = 10
                    }
                    if (i >= (currentPage * countriesLength) - countriesLength && i < currentPage * countriesLength) {
                        return <Card
                            id={e.id}
                            codigo={e.codigo}
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
                <button onClick={() => paginate(currentPage - 1)}>BACK</button>
                {pages.map(page => (
                    <div className={styles.paginateButtons} key={page}>
                        <a className={styles.buttons} onClick={() => paginate(page)} key={page} >
                            {page}
                        </a>
                    </div>
                ))}
                <button onClick={() => paginate(currentPage + 1)}>NEXT</button>
            </div>
        </div>
    )
}

export default Cards