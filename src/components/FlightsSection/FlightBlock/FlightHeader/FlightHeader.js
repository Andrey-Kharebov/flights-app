import React from 'react'
import classes from './FlightHeader.module.sass'

function FlightHeader({ price, airlineCode }) {
  return (
    <div className={ classes.flightHeader }>
      <div className={ classes.flightHeaderCompany }>
        <img src={`https://www.skyscanner.net/images/airlines/small/${airlineCode}.png`} alt={ airlineCode } />
      </div>
      <div className={ classes.flightHeaderPrice }>
        <p className={ classes.price }>{ price } &#8381;</p>
        <p className={ classes.priceMessage }>стоимость для одного взрослого пассажира</p>
      </div>
    </div>
  )
}

export default FlightHeader
