import { CREATE_COUNTRIE, GET_COUNTRIES, GET_COUNTRIESNAME, GET_COUNTRIES_DETAIL } from "../actions-types/actions"

const initialState = {
    countries: [],
    countriesID: {},
    addactivitys:{},
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_COUNTRIESNAME:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRIES_DETAIL:
            return {
                ...state,
                countriesID: action.payload,
            }
        case CREATE_COUNTRIE:
            return {
                ...state,
                addactivitys: action.payload
            }

            break;

        default:
            return {
                ...state
            }
    }
}