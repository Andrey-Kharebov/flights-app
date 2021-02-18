import axios from "axios";
import { setAviacompanies, setMaxPrice, setMinPrice } from "./filter-reducer";
import sortFligths from '../../helpers/sortFlights';

const SET_FLIGHTS = 'SET-FLIGHTS';
const SET_FLIGHTS_FOR_SHOW_QUANTITY = 'SET-FLIGHTS-FOR-SHOW-QUANTITY';

const initialState = {
  flights: null,
  flightsForShowQuantity: 2
}


const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS: 
      return {
        ...state,
        flights: [...action.payload]
      }
    case SET_FLIGHTS_FOR_SHOW_QUANTITY: 
      return {
        ...state,
        flightsForShowQuantity: state.flightsForShowQuantity + 1
      }
    default: 
      return state
  }
}

export const setFlights = (payload) => ({ type: SET_FLIGHTS, payload });
export const setFlightsForShowQuantity = () => ({ type: SET_FLIGHTS_FOR_SHOW_QUANTITY });

export const fetchFlights = () => (dispatch) => {
  axios.get('/flights.json')
    .then(response => {
      dispatch(setFlights(response.data.result.flights))
      dispatch(setMinPrice(+sortFligths(response.data.result.flights, 'priceUp')[0].flight.price.total.amount));
      dispatch(setMaxPrice(+sortFligths(response.data.result.flights, 'priceUp').pop().flight.price.total.amount));
      
      // массив названий компаний и объект из них, нужный для панели фильтрации
      let aviaCompaniesArr = [];
      let aviaCompaniesObj = {};
      response.data.result.flights.forEach(flight => aviaCompaniesArr.push(flight.flight.carrier.caption));
      aviaCompaniesArr = aviaCompaniesArr.filter((a, i, arr) => arr.indexOf(a) === i);

      aviaCompaniesArr.forEach(company => aviaCompaniesObj[company] = null);
      dispatch(setAviacompanies(aviaCompaniesObj));
    })
}


export default flightsReducer;