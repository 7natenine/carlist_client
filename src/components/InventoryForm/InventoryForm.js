import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate, Hyph } from '../Utils/Utils'
// add css 
// add icons

export default class InventoryForm extends Component {
  render() {
    const { ad } = this.props
    return (
      <Link to={`/ad/${ad.id}`} className='InventoryForm'> 
        <header className='InventoryForm_header'> 
          <h2 className='InventoryForm_heading'> 
            {ad.car_year}<Hyph />{ad.make}<Hyph />{ad.model}
          </h2> 
          <img src={ad.photos_link} alt='car_pictures'/>  {/*check this*/}
          <h3>
            <p>$</p>{ad.price} <Hyph /> {ad.mileage}<p>mi</p>
          </h3>
          <h5>
            {ad.content}
          </h5>
        </header> 
        <footer>
          <AdDate ad= {ad} /><Hyph />
        </footer>
        {/* <footer className='InventoryForm_footer'> 
          {ad.id && <> 
            <Hyph /> 
            <AdCreator ad={ad} />
          </>}
        </footer>  */}
      </Link>   
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

// function AdStyle({ ad }) { 
//   return ( 
//     <span className='InventoryForm_style'> 
//       <StyleIcon style={ad.style} /> 
//       {' '}
//       {ad.style}
//     </span> 
//   )
// }

// function AdCreator({ ad }) {
//   return ( 
//     <span className='InventoryForm_creator'>
//       {ad.author.full_name}
//     </span> 
//   )
// }


// Implement this
// function AdPhoto({ ad }) { 
//   return (
//     <img src={ad.image.src} alt={ad.image.alt}/>
//   )
// }

