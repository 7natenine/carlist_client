import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate, Hyph } from '../Utils/Utils'
// add css 
// add icons

export default class InventoryForm extends Components { 
  render() {
    const { article } = this.props
    return (
      <Link to={'/ad/${ad.id}'} className='InventoryForm'> 
        <header className='InventoryForm_header'> 
          <h2 className='InventoryForm_heading'> 
            {ad.title}
          </h2> 
          <AdDate ad= {ad} /> 
        </header> 
        <footer className='InventoryForm_footer'> 
          <AdStyle ad = {ad} /> 
          {ad.author.id && <> 
            <Hyph /> 
            <AdCreator ad={ad} />
          </>}
        </footer> 
      </Link>   
    )
  }
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
      {ad.author.full_name}
    </span> 
  )
}


// EDIT THIS 
function AdPhoto({ ad }) { 
  return (
    <img src={ad.image.src} alt={ad.image.alt}/>
  )
}

