import axios from 'axios'
import { CREATE_COUNTRIE, GET_COUNTRIES, GET_COUNTRIESNAME, GET_COUNTRIES_DETAIL, PAGINATE } from '../actions-types/actions'

export function getCountries () {
    return async function  (dispatch){
     let info = await axios("http://localhost:3001/countries")
     return dispatch ({
        type: GET_COUNTRIES,
        payload: info.data,
     })
    }
}

export function getCountriesName (name){
    return async function (dispatch){
        let info = await axios(`http://localhost:3001/countries?name=${name}`)
        return dispatch ({
            type: GET_COUNTRIESNAME,
            payload: info.data
        })
    }
}


export function getCountriesID (id) {
    return async function (dispatch){
        let info = await axios(`http://localhost:3001/countries/${id}`)
        return dispatch ({
            type:GET_COUNTRIES_DETAIL,
            payload: info.data
        })
    }
}

export function postCountries (addactivitys) {
    return async function (dispatch) {
      let info = await axios.post(`http://localhost:3001/activities`,addactivitys)
      return dispatch ({
        type:CREATE_COUNTRIE,
        payload: info.data
      })
    }
}

export function paginated(payload){
    return{
        type:PAGINATE,
        payload
    }
}