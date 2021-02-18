const SET_ACTIVE_SORT = 'SET-ACTIVE-SORT';
const SET_ONE_TRANSFER = 'SET-ONE-TRANSFER';
const NO_TRANSFERS = 'NO-TRANSFERS';
const SET_MIN_PRICE = 'SET-MIN-PRICE';
const SET_MAX_PRICE = 'SET-MAX-PRICE';
const SET_AVIACOMPANIES = 'SET-AVIACOMPANIES';

const initialState = {
  activeSort: '',
  oneTransfer: null,
  noTransfers: null,
  minPrice: 0,
  maxPrice: 0,
  aviaCompanies: {}
}


const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SORT: 
      return {
        ...state,
        activeSort: action.payload
      }
    case SET_ONE_TRANSFER:
      return {
        ...state,
        oneTransfer: action.payload
      }
    case NO_TRANSFERS:
      return {
        ...state,
        noTransfers: action.payload
      }
    case SET_MIN_PRICE:
      return {
        ...state,
        minPrice: action.payload
      }
    case SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload
      }
    case SET_AVIACOMPANIES:
      return {
        ...state,
        aviaCompanies: {...action.payload}
      }
    default: 
      return state
  }
}

export const setActiveSort = (payload) => ({ type: SET_ACTIVE_SORT, payload });
export const setOneTransfer = (payload) => ({ type: SET_ONE_TRANSFER, payload });
export const setNoTransfers = (payload) => ({ type: NO_TRANSFERS, payload });
export const setMinPrice = (payload) => ({ type: SET_MIN_PRICE, payload });
export const setMaxPrice = (payload) => ({ type: SET_MAX_PRICE, payload });
export const setAviacompanies = (payload) => ({ type: SET_AVIACOMPANIES, payload });

export default filterReducer;