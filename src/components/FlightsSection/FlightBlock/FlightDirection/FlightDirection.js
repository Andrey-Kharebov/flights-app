import React from 'react'
import classes from './FlightDirection.module.sass'


function FlightDirection({ flightInfo }) {
  
  let {airline, arrivalAirport, arrivalAirportUID, arrivalCity, 
    arrivalDate, arrivalTime, departureAirport, departureAirportUID, 
    departureCity, departureDate, departureTime, transfer, 
    travelDuration } = flightInfo;

  return (
    <>
      <div className={ classes.flightDirection }>
        <p>{ departureCity }, { departureAirport } <span>({ departureAirportUID })</span></p>
        <p className={ classes.flightArrow }>&#10141;</p>
        <p>{ arrivalCity }, { arrivalAirport }  <span>({ arrivalAirportUID })</span></p>
      </div>
      <div className={ classes.flightTimes }>
        <p>{ departureTime } <span>{ departureDate }</span></p>
        <p>&#x1F550; { travelDuration }</p>
        <p><span>{ arrivalDate }</span> { arrivalTime }</p>
      </div>
      <div className={ classes.flightDivider }>
        <hr />
        { transfer ? <p className={ classes.transferInfo }>{ transfer }</p> : null }
      </div>     
      <div className={ classes.flightOwner }>
        { airline }
      </div> 
    </>
  )
}

export default FlightDirection
