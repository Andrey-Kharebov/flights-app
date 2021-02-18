const filterFlightsByTransfer = (flights, oneTransfer, noTransfers) => {
  let filteredFlights = [];

  if (oneTransfer === true && noTransfers === true) {
    return flights;
  } else if (oneTransfer === true) {
    filteredFlights = flights.filter(i => i.flight.legs[0].segments.length > 1)
    return filteredFlights;
  } else if (noTransfers === true) {
    filteredFlights = flights.filter(i => i.flight.legs[0].segments.length === 1)
    return filteredFlights;
  } else {
    return flights;
  }
}

export default filterFlightsByTransfer;