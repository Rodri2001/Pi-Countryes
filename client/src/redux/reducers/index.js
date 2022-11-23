import { ALL_ACTIVITY, CREATE_COUNTRIE, FILTER_ACTIVITY, FILTER_CONTINENT, GET_COUNTRIES, GET_COUNTRIESNAME, GET_COUNTRIES_DETAIL, ORDER_AZ_ZA, ORDER_POPULATION } from "../actions-types/actions"

const initialState = {
    countries: [],
    countriesAll: [],
    countriesID: {},
    addactivitys: {},
    allactivity: [],
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countriesAll: action.payload,
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
        case ALL_ACTIVITY:
            return {
                ...state,
                allactivity: action.payload
            }
            
        case ORDER_AZ_ZA:
            let filtercontinent = [...state.countriesAll]
            let filterorder = [...state.countries]
            if (action.payload === "all") {
                return {
                    ...state,
                    countries: filtercontinent
                }
            }
            if (action.payload === 'asc') {
                const data =  filterorder.sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1))
                return {
                    ...state,
                    countries: data
                }
            }

            const data = filterorder.sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? -1 : 1))
            return {
                ...state,
                countries: data,
            }


        case ORDER_POPULATION:
            
        let orderpopulation = [...state.countriesAll]
        let filterpopulation = [...state.countries]
            if (action.payload === "all") {
                return {
                    ...state,
                    countries: orderpopulation
                }
            }
            if (action.payload === 'asc') {
                const data = filterpopulation.sort((a, b) => {
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
                const data = filterpopulation.sort((a, b) => {
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
            let ordercontinent = [...state.countriesAll]
            let filtercontinent2 = [...state.countries]
            if (action.payload === "all") {
                return {
                    ...state,
                    countries: ordercontinent
                }
            }
             const data2 = filtercontinent2.filter((e) => e.continent === action.payload)
            return {
                ...state,
                countries: data2
            }
            break 

        case FILTER_ACTIVITY:
            if(action.payload === "all"){
                return{
                    ...state,
                    countries: [...state.countriesAll]
                }
            }

            
            return{
                ...state,
                 countries: [...state.countriesAll].filter((e) => e.activities.some(e => e.name === action.payload) )
            }

            break
        default:
            return {
                ...state
            }
    }
}