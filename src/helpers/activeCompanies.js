const activeCompanies = (aviaCompanies, clickedCompany) => {
  let companies = aviaCompanies;
  
  for (let key in companies) {
    if (companies[key] === null && key !== clickedCompany) {
      companies[key] = false;
    } else if (companies[key] === null && key === clickedCompany) {
      companies[key] = true;
    } else if (key === clickedCompany) {
      companies[key] = !companies[key];
    }
  }

  return companies
}

export default activeCompanies;