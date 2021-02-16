import React, { useState } from 'react'
import classes from './SortBlock.module.sass';

function SortBlock() {
  const [sortActive, setSortActive] = useState('priceUp');

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
              checked={ sortActive === 'priceUp' }
              onChange={ () => { setSortActive('priceUp') } } 
            /> - по возрастанию цены
          </label>
        </li>
        <li>
          <label htmlFor='priceDown'> 
            <input 
              type='radio' 
              name='priceDown'
              id='priceDown'
              checked={ sortActive === 'priceDown' }
              onChange={ () => { setSortActive('priceDown') } }  
            /> - по убыванию цены
          </label>
          </li>
        <li>
          <label htmlFor='roadTimeUp' >
            <input 
              type='radio' 
              name='roadTimeUp'
              id='roadTimeUp'
              checked={ sortActive === 'roadTimeUp' }
              onChange={ () => { setSortActive('roadTimeUp') } }  
            /> - по времени в пути
          </label>
        </li>
      </ul>
    </div>
  )
}

export default SortBlock
