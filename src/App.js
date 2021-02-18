import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.sass';
import { fetchFlights, setFlightsForShowQuantity } from './redux/reducers/flights-reducer';
import FilterSection from './components/FilterSection/FilterSection';
import FilghtsSection from './components/FlightsSection/FilghtsSection';

function App({ flights, flightsForShowQuantity, setFlightsForShowQuantity, fetchFlights, activeSort, oneTransfer, noTransfers, minPrice, maxPrice, aviaCompanies }) {

  useEffect(() => {
    fetchFlights();
  }, [])
  
  return (
    <div className='App'>
      <FilterSection />
      <FilghtsSection 
        activeSort={ activeSort } 
        oneTransfer={ oneTransfer }
        noTransfers={ noTransfers }
        flights={ flights } 
        flightsForShowQuantity={ flightsForShowQuantity }
        setFlightsForShowQuantity={ setFlightsForShowQuantity }
        minPrice={ minPrice } 
        maxPrice={ maxPrice }
        aviaCompanies={ aviaCompanies }
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    flights: state.flightsReducer.flights,
    flightsForShowQuantity: state.flightsReducer.flightsForShowQuantity,
    activeSort: state.filterReducer.activeSort,
    oneTransfer: state.filterReducer.oneTransfer,
    noTransfers: state.filterReducer.noTransfers,
    minPrice: state.filterReducer.minPrice,
    maxPrice: state.filterReducer.maxPrice,
    aviaCompanies: state.filterReducer.aviaCompanies
  }
}

export default connect(mapStateToProps, { fetchFlights, setFlightsForShowQuantity })(App);
