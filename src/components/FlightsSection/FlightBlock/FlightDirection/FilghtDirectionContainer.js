import React from 'react'
import FlightDirection from './FlightDirection'
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru')

function FilghtDirectionContainer({ leg }) {
  let startPoint = leg.segments[0];
  let endPoint = leg.segments.slice(-1);

  let flightInfo = {}

  // DEPARTURE INFO 
  flightInfo.departureCity = startPoint.departureCity ? startPoint.departureCity.caption : 'NO CITY';
  flightInfo.departureAirport = startPoint.departureAirport.caption;
  flightInfo.departureAirportUID = startPoint.departureAirport.uid;
  flightInfo.departureTime = `${startPoint.departureDate.split('T')[1].split(':').slice(0, 2).join(':')}`;
  flightInfo.departureDate = `${moment(startPoint.departureDate).format('D MMM dd')}`;

  // TRANSFER INFO 
  leg.segments.length > 1 ? flightInfo.transfer = `${leg.segments.length - 1} пересадка` : flightInfo.transfer = null;

  // ARRIVAL INFO 
  flightInfo.arrivalCity = endPoint[0].arrivalCity ? endPoint[0].arrivalCity.caption : 'NO CITY';
  flightInfo.arrivalAirport = endPoint[0].arrivalAirport.caption;
  flightInfo.arrivalAirportUID = endPoint[0].arrivalAirport.uid;
  flightInfo.arrivalTime = `${endPoint[0].arrivalDate.split('T')[1].split(':').slice(0, 2).join(':')}`;
  flightInfo.arrivalDate = `${moment(endPoint[0].arrivalDate).format('D MMM dd')}`;
  flightInfo.travelDuration = `${Math.floor(leg.duration / 60)} ч. ${leg.duration % 60} мин.`;
  flightInfo.airline = `${startPoint.airline.airlineCode} ${startPoint.airline.caption}`;

  return (
    <FlightDirection flightInfo={ flightInfo } />
  )
}

export default FilghtDirectionContainer
