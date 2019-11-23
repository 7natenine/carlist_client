/* 
// Search bar, drop down selector that 
// acceses database for model, make, and year.
*/

import React, { Component } from 'react'
import { Select } from '../Utils/Utils'

export default class SearchForm extends Components {
  render() { 
    return (
      <form 
        className='searchForm'
      >
        <div className='brand-selector'>
          <Select></Select>  
        </div>
      </form>
    )
  }
}