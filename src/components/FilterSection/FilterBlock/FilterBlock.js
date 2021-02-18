import React from 'react'
import { connect } from 'react-redux';
import { setOneTransfer, setNoTransfers } from '../../../redux/reducers/filter-reducer';
import classes from './FilterBlock.module.sass';

function FilterBlock({ oneTransfer, setOneTransfer, noTransfers, setNoTransfers }) {
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
                checked={ oneTransfer === true }
                onChange={ () => { setOneTransfer(!oneTransfer) } } 
              /> - 1 пересадка
            </label>
          </li>
          <li>
            <label htmlFor='noTransfers'> 
              <input 
                type='checkbox' 
                name='noTransfers' 
                id='noTransfers'
                checked={ noTransfers === true }
                onChange={ () => { setNoTransfers(!noTransfers) } } 
              /> - без пересадок
            </label>
          </li>
        </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    oneTransfer: state.filterReducer.oneTransfer,
    noTransfers: state.filterReducer.noTransfers
  }
}



export default connect(mapStateToProps, { setOneTransfer, setNoTransfers })(FilterBlock);
