import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.sass';
import { setFlights } from './redux/reducers/flights-reducer';
import FilterSection from './components/FilterSection/FilterSection';
import FilghtsSection from './components/FlightsSection/FilghtsSection';

function App({ flights, setFlights }) {
  useEffect(() => {
    axios.get('/flights.json')
      .then(response => {
        // console.log(response.data.result) .splice(0, 10)
        setFlights(response.data.result.flights)
      })
  }, [])
  
  return (
    <div className='App'>
      <FilterSection />
      <FilghtsSection flights={ flights }/>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    flights: state.flightsReducer.flights
  }
}

export default connect(mapStateToProps, { setFlights })(App);
