const priceRange = (flights, minPrice, maxPrice) => {
  let rangedFlights = [];
  
  rangedFlights = flights.filter(i => +i.flight.price.total.amount >= minPrice);
  rangedFlights = rangedFlights.filter((i => +i.flight.price.total.amount <= maxPrice));
  
  return rangedFlights
}

export default priceRange;