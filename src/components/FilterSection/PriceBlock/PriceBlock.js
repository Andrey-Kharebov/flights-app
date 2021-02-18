import React from 'react'
import { connect } from 'react-redux';
import { setMaxPrice, setMinPrice } from '../../../redux/reducers/filter-reducer';
import classes from './PriceBlock.module.sass';

function PriceBlock({ minPrice, maxPrice, setMinPrice, setMaxPrice }) {
  const minPriceHandler = (event) => {
    setMinPrice(+event.target.value)
  }

  const maxPriceHandler = (event) => {
    setMaxPrice(+event.target.value)
  }

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
              value={ minPrice }
              onChange={ (event) => { minPriceHandler(event) } } 
            />
          </label>
        </li>
        <li>
          <label htmlFor='maxPrice'> 
            До <input 
              type='number' 
              name='maxPrice' 
              id='maxPrice'
              value={ maxPrice }
              onChange={ (event) => { maxPriceHandler(event) } }  
            />
          </label>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    minPrice: state.filterReducer.minPrice,
    maxPrice: state.filterReducer.maxPrice
  }
}

export default connect(mapStateToProps, { setMinPrice, setMaxPrice })(PriceBlock)
