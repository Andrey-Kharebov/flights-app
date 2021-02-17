import React from 'react'
import classes from './FlightBlock.module.sass'
import FilghtDirectionContainer from './FlightDirection/FilghtDirectionContainer'
import FlightHeader from './FlightHeader/FlightHeader'

function FlightBlock({ flight }) {
  return (
    <div className={ classes.flightBlock }>
      <FlightHeader 
        price={ flight.price.total.amount }
        airlineCode={ flight.carrier.airlineCode }
      />
      <div className={ classes.flightTo }>
        <FilghtDirectionContainer leg={ flight.legs[0] }/>
      </div>
      <div className={ classes.flightFrom }>
        <FilghtDirectionContainer leg={ flight.legs[1] }/>
      </div>
      <button>Выбрать</button>
    </div>
  )
}

export default FlightBlock
