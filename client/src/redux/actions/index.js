import axios from 'axios'
import { ALL_ACTIVITY, CREATE_COUNTRIE, FILTER_ACTIVITY, FILTER_CONTINENT, GET_COUNTRIES, GET_COUNTRIESNAME, GET_COUNTRIES_DETAIL, ORDER_AZ_ZA, ORDER_POPULATION, PAGINATE } from '../actions-types/actions'

let url = "https://pi-countryes-production.up.railway.app"

export function getCountries () {
    return async function  (dispatch){
     let info = await axios( "https://pi-countryes-production.up.railway.app/countries")
     return dispatch ({
        type: GET_COUNTRIES,
        payload: info.data,
     })
    }
}

export function getCountriesName (name){
    return async function (dispatch){
        let info = await axios(url + `/countries?name=${name}`)
        return dispatch ({
            type: GET_COUNTRIESNAME,
            payload: info.data
        })
    }
}


export function getCountriesID (id) {
    return async function (dispatch){
        let info = await axios(url + `/countries/${id}`)
        return dispatch ({
            type:GET_COUNTRIES_DETAIL,
            payload: info.data
        })
    }
}

export function postCountries (addactivitys) {
    return async function (dispatch) {
      let info = await axios.post(url + `/activities`,addactivitys)
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

export function allActivity(){
    return async function(dispatch){
        let info = await axios.get(url + `/activitys`)
        return dispatch({
        type:ALL_ACTIVITY,
        payload: info.data
        })
    }
}

export function orderName(payload){
    return {
        type:ORDER_AZ_ZA,
        payload,
    }
}

export function orderPopulation(payload){
    return {
        type:ORDER_POPULATION,
        payload,
    }
}


export function filtercontinent(payload){
    return {
        type:FILTER_CONTINENT,
        payload,
    }
}

export function filterActivity(payload){
    return {
        type:FILTER_ACTIVITY,
        payload,
    }
}