import React from 'react'
import classes from './FilterSection.module.sass';

import FilterBlock from './FilterBlock/FilterBlock';
import SortBlock from './SortBlock/SortBlock';
import PriceBlock from './PriceBlock/PriceBlock';
import AviacompaniesBlock from './AviacompaniesBlock/AviacompaniesBlock';


function FilterSection() {
  return (
    <div className={ classes.filterSection }>
      <SortBlock />
      <FilterBlock />
      <PriceBlock />
      <AviacompaniesBlock />
    </div>
  )
}

export default FilterSection
