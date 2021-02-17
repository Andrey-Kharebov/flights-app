const SET_FLIGHTS = 'SET-FLIGHTS';

const initialState = {
  flights: null
}


const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS: 
      return {
        ...state,
        flights: [...action.payload]
      }
    default: 
      return state
  }
}

export const setFlights = (payload) => ({ type: SET_FLIGHTS, payload });

export default flightsReducer;