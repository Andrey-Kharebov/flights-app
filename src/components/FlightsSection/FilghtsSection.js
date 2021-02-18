import React from 'react'
import classes from './FilghtsSection.module.sass'
import FlightBlock from './FlightBlock/FlightBlock'

import priceRange from '../../helpers/priceRange'
import filterFlightsByActiveCompanies from '../../helpers/filterFlightsByActiveCompaines'
import flightsForShowSlicer from '../../helpers/flightsForShowSlicer'
import sortProducts from '../../helpers/sortFlights'
import filterFlightsByTransfer from '../../helpers/filterFlightsByTransfer'

function FilghtsSection({ flights, flightsForShowQuantity, activeSort, oneTransfer, noTransfers, minPrice, maxPrice, aviaCompanies, setFlightsForShowQuantity }) {

  console.log(flightsForShowQuantity)
  return (
    <div className={ classes.fligthsSection }>
      { flights && flightsForShowSlicer(priceRange(filterFlightsByTransfer(sortProducts(filterFlightsByActiveCompanies(flights, aviaCompanies), activeSort), oneTransfer, noTransfers), minPrice, maxPrice), flightsForShowQuantity).map(flight => {
        return (
          <FlightBlock 
            key={ flight.flightToken } 
            flight={ flight.flight }
          />
        )
      })}

      <button onClick={() => { setFlightsForShowQuantity() }}>Показать еще</button>
    </div>
  )
}


export default FilghtsSection
