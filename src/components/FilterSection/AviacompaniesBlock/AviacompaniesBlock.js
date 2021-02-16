import React from 'react'
import classes from './AviacompaniesBlock.module.sass';

function AviacompaniesBlock() {
  return (
    <div className={ classes.aviacompaniesBlock }>
      <span>Авиакомпании</span>
      <ul>
        <li>
          <label htmlFor='LOT'> 
            <input 
              type='checkbox' 
              name='LOT' 
              id='LOT'
              // checked={ sortActive === 'priceUp' }
              // onChange={ () => { setSortActive('priceUp') } } 
            /> - LOT Polish Airlines от 21049 р.
          </label>
        </li>
        <li>
          <label htmlFor='Airflock'> 
            <input 
              type='checkbox' 
              name='Airflock' 
              id='Airflock'
              // checked={ sortActive === 'priceUp' }
              // onChange={ () => { setSortActive('priceUp') } } 
            /> - Aэрофлот - рос... от 31733 р.
          </label>
        </li>
      </ul>
    </div>
  )
}

export default AviacompaniesBlock
