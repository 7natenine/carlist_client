import React, { Component } from 'react'

export default class HomeForm extends Component { 
  render() {
    return(
      <div className="new-mark">
				<select id="Brand" name='brand'>
            <option value="DEFAULT" selected disabled hidden>Select Brand</option>
            <option className="filter-toggle" value="audi" >Audi</option>
            <option className="filter-toggle" value="bmw">BMW</option>
            <option className="filter-toggle" value="Chevrolet">Chevrolet</option>
            <option className="filter-toggle" value="Dodge">Dodge</option>
          </select>
          <select id="Model" name='Model'>
            <option value="" selected disabled hidden>Select model</option>
            <option className="filter-toggle" value="A4" >A4</option>
            <option className="filter-toggle" value="A3">A3</option>
            <option className="filter-toggle" value="A5">A5</option>
            <option className="filter-toggle" value="M3">M3</option>
            <option className="filter-toggle" value="Corvette">Corvette</option>
            <option className="filter-toggle" value="Viper">Viper</option>
          </select>
          <select id="car_year" name='car_year'>
            <option value="" selected disabled hidden>Select year</option>
            <option className="filter-toggle" value="2019" >2019</option>
            <option className="filter-toggle" value="2018">2018</option>
            <option className="filter-toggle" value="2017">2017</option>
            <option className="filter-toggle" value="2016">2016</option>
            <option className="filter-toggle" value="2015">2015</option>
            <option className="filter-toggle" value="2014">2014</option>
          </select>
        <button className="search-car" type ="button">Search</button> 
      </div>  
    )

  }
}