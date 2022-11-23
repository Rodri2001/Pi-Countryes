import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries, postCountries } from '../../redux/actions'
import styles from "./Form.module.css"

function Form() {



  const countries = useSelector((state) => state.countries)
  const dispatch = useDispatch()

  const [disable, setDisable] = useState(true)

  const [errors, setErros] = useState({
    name: "",
    duration: "",
    season: "",
    difficulty: "",
    countryIds: [],
  })


  const [state, setState] = useState({
    name: "",
    duration: "",
    season: "",
    difficulty: "",
    countryIds: [],
  })

const  handleChange = (e) => {
    e.preventDefault()
    if (e.target.name === "countryIds") {
      if(state.countryIds.every((t) => t !== e.target.value)){
        return setState({
            ...state,
            countryIds: [...state.countryIds, e.target.value],
          });
        }
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(postCountries(state))

    setState({
      name: "",
      duration: "",
      season: "",
      difficulty: "",
      countryIds: [],
    })
  }

  const validate = (e) => {
    if (e.target.name === "name" && e.target.value.length < 2) {
      setErros({
        ...errors,
        name: "El nombre tiene que tener mas caracteres"
      })
    } else if (e.target.name === "duration" && (e.target.value < 1 || e.target.value > 23)) {
      setErros({
        ...errors,
        duration: "la duracion tiene que tener una hora"
      })
    } else if (e.target.name === "season" && e.target.value < 2) {
      setErros({
        ...errors,
        season: "seleccione una temporada"
      })
    } else if (e.target.name === "difficulty" && (e.target.value < 1 || e.target.value > 5)) {
      setErros({
        ...errors,
        difficulty: "Seleccione una dificultad valida"
      })
    } else if (e.target.name === "countryIds" && !e.target.value) {
      setErros({
        ...errors,
        countryIds: "Seleccione 1 pais"
      })
    } else {
      setErros({
        ...errors,
        [e.target.name]: ""
      })
    }
  }

  function handleDelete(e) {
    e.preventDefault()
    setState({
      ...state,
      countryIds: state.countryIds.filter((t) => t !== e.target.value)
    })
  }

  useEffect(() => {
    console.log(state.countryIds,22)
    dispatch(getCountries())

    if (Object.values(state).every((e) => e.length) && Object.values(errors).every((e) => !e.length)) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [dispatch, state])


  return (
    <div>
      <div className={styles.NavBar}>
        <Link to='/Home' >
          <button>Home</button>
        </Link>
      </div>

      <div className={styles.form}>
        <form id="form" onChange={handleChange} onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label >Name: </label>
            <input className={errors.name && styles.danger} name='name' onChange={(e) => validate(e)} ></input>
            <p>{errors.name}</p>
          </div>
          <div>
            <label>Duration in HS: </label>
            <input name='duration' type="number" min="0" max="24" onChange={(e) => validate(e)} ></input>
            <p>{errors.duration}</p>
          </div>
          <div>
            <label>Season: </label>
            <select name='season' >
              <option>Autumn</option>
              <option>Winter</option>
              <option>Springtime</option>
              <option>Summer</option>
            </select>
            <p>{errors.season}</p>
          </div>
          <div>
            <label>Difficulty :</label>
            <input type="number" max="5" min="1" name='difficulty' onChange={(e) => validate(e)} ></input>
            <p>{errors.difficulty}</p>
          </div>
          <div>
            <label>Countries :</label>
            <select name='countryIds' multiple >{
              countries.map((e) => <option  value={e.name} key={e.id} name={e.name}>{e.name}</option>)
            }</select>
            <p>{errors.countryIds}</p>
          </div>
          <div>
            {state.countryIds.length ? state.countryIds.map((t) => <button key={t} value={t} onClick={(e) => handleDelete(e)}>{t}</button>) : null}
          </div>
          <div>
            <button disabled={disable} type='submit'>Agregar Actividad</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form