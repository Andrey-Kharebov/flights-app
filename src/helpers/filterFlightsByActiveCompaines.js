const filterFlightsByActiveCompanies = (flights, aviaCompanies) => {
  let filteredFlights = [];
  let falseCounter = 0;
  let objLengthCounter = 0;

  for (let key in aviaCompanies) {
    objLengthCounter++;
    if (aviaCompanies[key] === false) {
      falseCounter++
    }
  }
  
  if (objLengthCounter === falseCounter) {
    return flights
  }

  for (let key in aviaCompanies) {
    flights.forEach(flight => {
      if (key === flight.flight.carrier.caption && aviaCompanies[key] === null) {
        filteredFlights.push(flight);
      } else if (key === flight.flight.carrier.caption && aviaCompanies[key] === true) {
        filteredFlights.push(flight);
      }
    })
  }

  return filteredFlights
}

export default filterFlightsByActiveCompanies;