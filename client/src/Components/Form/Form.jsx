import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

  function handleChange(e) {
    e.preventDefault()
    console.log(e.target.name)
    if (e.target.name === "countryIds") {
      setState({
        ...state,
        countryIds: [...state.countryIds, e.target.value]
      })
    } else {
      console.log("chinga")
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
    }
    console.log(state, "state")
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.value, "soy el value")
    console.log(state, "soy state")
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

  useEffect(() => {
    dispatch(getCountries())

    if (Object.values(state).every((e) => e.length) && Object.values(errors).every((e) => !e.length)) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [dispatch, state])


  return (
    <div className={styles.form}>
      <form id="form" onChange={handleChange} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input name='name' onChange={(e) => validate(e)} ></input>
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
          <select name='countryIds' multiple onChange={(e) => validate(e)} >{
            countries.map((e) => <option value={e.id} key={e.name} name={e.name}>{e.name}</option>)
          }</select>
          <p>{errors.countryIds}</p>
        </div>

        <div>
          <button disabled={disable} type='submit'>Agregar Actividad</button>
        </div>
      </form>
    </div>
  )
}

export default Form