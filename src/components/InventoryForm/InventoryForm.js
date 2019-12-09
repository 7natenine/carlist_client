import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { NiceDate, Hyph } from '../Utils/Utils'
// add css 
// add icons

export default class InventoryForm extends Component {
  render() {
    const { ad } = this.props
    return (
      // <Link to={`/ad/${ad.id}`} className='InventoryForm'> 
      <div>
        <header className='InventoryForm_header'> 
          <p><AdDate ad= {ad} /></p>
          <h2 className='InventoryForm_heading'> 
            {ad.car_year}<Hyph />{ad.make}<Hyph />{ad.model}
          </h2> 
          <img src={ad.photos_link} alt='pictures'/>  {/*check this*/}
          <h3>
            <p>$</p>{ad.price} <Hyph /> {ad.mileage}<p>mi</p>
          </h3>
          <h5>
            {ad.content}
          </h5>
        </header>
        <footer>
          <AdCreator ad={ad}/>
        </footer>
      </div>
      // </Link>   
    )
  }
}


function AdDate({ ad }) {
  return ( 
    <span className='InventoryForm_date'> 
      <NiceDate
        date={ad.date_created}
      />
    </span> 
  )
}


function AdCreator({ ad }) {
  return ( 
    <span className='InventoryForm_creator'>
      <h5>Contact Information:</h5>
      {ad.author.full_name}<Hyph />{ad.author.email}<Hyph /> 
      {ad.author.phone} 
    </span> 
  )
}


// Implement this
// function AdPhoto({ ad }) { 
//   return (
//     <img src={ad.image.src} alt={ad.image.alt}/>
//   )
// }

