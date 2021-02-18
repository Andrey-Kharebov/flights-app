import React from 'react'
import { connect } from 'react-redux';
import { setActiveSort } from '../../../redux/reducers/filter-reducer';
import classes from './SortBlock.module.sass';

function SortBlock({ activeSort, setActiveSort }) {

  return (
    <div className={ classes.sortBlock }>
      <span>Сортировать</span>
      <ul>
        <li>
          <label htmlFor='priceUp'> 
            <input 
              type='radio' 
              name='priceUp' 
              id='priceUp'
              checked={ activeSort === 'priceUp' }
              onChange={ () => { setActiveSort('priceUp') } } 
            /> - по возрастанию цены
          </label>
        </li>
        <li>
          <label htmlFor='priceDown'> 
            <input 
              type='radio' 
              name='priceDown'
              id='priceDown'
              checked={ activeSort === 'priceDown' }
              onChange={ () => { setActiveSort('priceDown') } }  
            /> - по убыванию цены
          </label>
          </li>
        <li>
          <label htmlFor='durationUp' >
            <input 
              type='radio' 
              name='durationUp'
              id='durationUp'
              checked={ activeSort === 'durationUp' }
              onChange={ () => { setActiveSort('durationUp') } }  
            /> - по времени в пути
          </label>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeSort: state.filterReducer.activeSort
  }
}

export default connect(mapStateToProps, { setActiveSort })(SortBlock);
