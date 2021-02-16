import React from 'react'
import classes from './FilterBlock.module.sass';

function FilterBlock() {
  return (
    <div className={ classes.filterBlock }>
      <span>Фильтровать</span>
        <ul>
          <li>
            <label htmlFor='oneTransfer'> 
              <input 
                type='checkbox' 
                name='oneTransfer' 
                id='oneTransfer'
                // checked={ sortActive === 'priceUp' }
                // onChange={ () => { setSortActive('priceUp') } } 
              /> - 1 пересадка
            </label>
          </li>
          <li>
            <label htmlFor='noTransfers'> 
              <input 
                type='checkbox' 
                name='noTransfers' 
                id='noTransfers'
                // checked={ sortActive === 'priceUp' }
                // onChange={ () => { setSortActive('priceUp') } } 
              /> - без пересадок
            </label>
          </li>
        </ul>
    </div>
  )
}

export default FilterBlock
