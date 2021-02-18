const flightsForShowSlicer = (flights, flightsForShowQuantity) => {
  let slicedFlights = flights.slice(0, flightsForShowQuantity);

  return slicedFlights;
}

export default flightsForShowSlicer;