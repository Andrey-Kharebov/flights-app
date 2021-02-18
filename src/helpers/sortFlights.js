const sortProducts = (flights, activeSort) => {
  let sortedProducts = [];

  if (activeSort === 'priceUp') {
    sortedProducts = flights.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
    return sortedProducts;
  } else if (activeSort === 'priceDown') {
    sortedProducts = flights.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
    return sortedProducts;
  } else if (activeSort === 'durationUp') {
    sortedProducts = flights.sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration);
    return sortedProducts;
  } else {
    return flights;
  }

}

export default sortProducts;