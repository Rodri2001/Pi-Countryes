import { ALL_ACTIVITY, CREATE_COUNTRIE, FILTER_CONTINENT, GET_COUNTRIES, GET_COUNTRIESNAME, GET_COUNTRIES_DETAIL, ORDER_AZ_ZA, ORDER_POPULATION, PAGINATE } from "../actions-types/actions"

const initialState = {
    countries: [],
    countriesAll: [],
    countriesID: {},
    allactivity: [],
    addactivitys: {},
    paginate: [],

}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesAll: action.payload
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
        case ALL_ACTIVITY:
            return {
                ...state,
                allactivity: action.payload
            }
        case PAGINATE:
            return {
                ...state,
                paginate: action.payload
            }
        case ORDER_AZ_ZA:
            if (action.payload === "all") {
                return {
                    ...state,
                    countries: [...state.countriesAll]
                }
            }
            if (action.payload === 'asc') {
                const data = [...state.countriesAll].sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1))
                return {
                    ...state,
                    countries: data
                }
            }

            const data = [...state.countriesAll].sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? -1 : 1))
            return {
                ...state,
                countries: data,
            }


        case ORDER_POPULATION:
            if (action.payload === "all") {
                return {
                    ...state,
                    countries: [...state.countriesAll]
                }
            }
            if (action.payload === 'asc') {
                const data = [...state.countriesAll].sort((a, b) => {
                    let pesoA = parseInt(a.population);
                    let pesoB = parseInt(b.population);
                    if (pesoA > pesoB) return 1;
                    if (pesoA < pesoB) return -1;
                    else return 0;
                })
                return {
                    ...state,
                    countries: data
                }
            }
            if (action.payload === 'desc') {
                const data = [...state.countriesAll].sort((a, b) => {
                    let pesoA = parseInt(a.population);
                    let pesoB = parseInt(b.population);
                    if (pesoA > pesoB) return -1;
                    if (pesoA < pesoB) return 1;
                    else return 0;
                })
                return {
                    ...state,
                    countries: data
                }
            }

            break;

        case FILTER_CONTINENT:
            if (action.payload === "all") {
                return {
                    ...state,
                    countries: [...state.countriesAll]
                }
            }
            
            return {
                ...state,
                countries: [...state.countriesAll].filter((e) => e.continent === action.payload)
            }


            break
        default:
            return {
                ...state
            }
    }
}