import React from 'react'
import classes from './PriceBlock.module.sass';

function PriceBlock() {
  return (
    <div className={ classes.priceBlock }>
      <span>Цена</span>
      <ul>
        <li>
          <label htmlFor='minPrice'> 
            От <input 
              type='number' 
              name='minPrice' 
              id='minPrice'
              // checked={ sortActive === 'priceUp' }
              // onChange={ () => { setSortActive('priceUp') } } 
            />
          </label>
        </li>
        <li>
          <label htmlFor='maxPrice'> 
            До <input 
              type='number' 
              name='maxPrice' 
              id='maxPrice'
              // checked={ sortActive === 'priceUp' }
              // onChange={ () => { setSortActive('priceUp') } } 
            />
          </label>
        </li>
      </ul>
    </div>
  )
}

export default PriceBlock
