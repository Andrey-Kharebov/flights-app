import React from 'react'
import { connect } from 'react-redux';
import activeCompanies from '../../../helpers/activeCompanies';
import { setAviacompanies } from '../../../redux/reducers/filter-reducer';
import classes from './AviacompaniesBlock.module.sass';

function AviacompaniesBlock({ aviaCompanies, setAviacompanies }) {
  const changeAviaCompaniesObjHandler = (aviaCompanies, company) => {
    setAviacompanies(activeCompanies(aviaCompanies, company));
  }

  return (
    <div className={ classes.aviacompaniesBlock }>
      <span>Авиакомпании</span>
      <ul>
        { aviaCompanies && Object.keys(aviaCompanies).map((company, index) => {
          return (
            <li key={ index }>
              <label htmlFor={ company }> 
                <input 
                  type='checkbox' 
                  name={ company } 
                  checked={ aviaCompanies[company] === true }
                  onChange={ () => { changeAviaCompaniesObjHandler(aviaCompanies, company) }}
                /> - { company }
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    aviaCompanies: state.filterReducer.aviaCompanies
  }
}


export default connect(mapStateToProps, { setAviacompanies })(AviacompaniesBlock)

