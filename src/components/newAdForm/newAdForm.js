import React, { Component } from 'react'
import { Button, TextArea, Input, Required } from '../Utils/Utils'
import { Link } from 'react-router-dom'
import AdApiService from '../../services/ad-api-service'

export default class NewAdForm extends Component { 

  state = { 
    brand: null,
    model: null, 
    car_year: null,
    photos_link: null, 
    price: null, 
    description: null, 
    name: null, 
    phone: null, 
    mail: null
  }

  // fileSelectedHandler = event => { 
  //   this.setState({ 
  //     selectedFile: event.target.files[0]
  //   })
  // }

  onSubmithandler = ev => { 
    ev.preventDefault()
    const { brand, model, car_year, photos_link, price, description, name, phone, mail} = ev.target
    console.log(brand, model, car_year, photos_link, price, description, name, phone, mail)
    AdApiService.postAd(brand.value, model.value, car_year.value, photos_link.value, price.value, 
      description.value, name.value, phone.value, mail.value)
    .then(() => {
      brand.value = ''
      model.value = ''
      car_year.value = ''
      photos_link.value = ''
      price.value = ''
      description.value = ''
      name.value = ''
      phone.value = ''
      mail.value = ''
    })
    // .catch(this.)
  }


  render() {
    return (
      <form 
        className='adForm'
        onSubmit= {this.onSubmithandler}
      >
        <div className='brand'> 
          <label htmlFor='NewAdFormBrand'>
            Brand: <Required />
          </label>
          <Input 
          name='brand' 
          type='text'
          required
          id = 'NewAdFormBrand'>
          </Input>
        </div>
        <div className='model'> 
          <label htmlFor='NewAdFormModel'>
            Model: <Required/> 
          </label>
          <Input 
            name='model'
            type='text'
            required
            id = 'NewAdFormModel'> 
          </Input>
        </div>
        <div className='car_year'>
          <label htmlFor='NewAdFormYear'>
            Year:(ex.2019)<Required/>
          </label> 
          <Input 
            name='car_year '
            type='number' 
            pattern="[0-9]{4}" >
          </Input>
        </div>
        <div className='price'> 
          <label htmlFor='NewAdFormPrice'>
            Price: <Required/>
          </label>
          <Input 
            name='price'
            type='number'
            required
            id='NewAdFormPrice'>
          </Input>
        </div>
        <div className='description'>
          <label htmlFor='NewAdFormDescription'>
            Description: <Required/>
          </label>
          <TextArea 
            name='description'
            type='text'
            required>
          </TextArea>
        </div>
        {/* <div className='image'>
          <label>
          <InputFile type='file' onChange={this.fileSelectedHandler}>
          </InputFile>
          <Button onClick={this.fileUploadHandler}>
            Upload
          </Button>
          <Button onClick={this.cancelHandler}>
            Cancel
          </Button>
          <Button onClick={this.cancelHandler}>
            Submit
          </Button>
        </div> */}
        <div className='photos_link'> 
          <label htmlFor='NewAdFormImages'>
            Image Urls: <Required/> 
          </label>
          <TextArea 
            name='photos_link'
            type='text'>
          </TextArea>
        </div>
        <div className='contact-info'>
          <label htmlFor='NewAdFormName'>
            Name: <Required/> 
          </label>
          <Input 
            name='name'
            type='text'
            required
            id='NewAdFormName'>
          </Input>     
        </div>
        <div className='contact-info'>
          <label htmlFor='NewAdFormName'>
            Phone: <Required/> 
          </label>
          <Input 
            name='phone'
            type='number'
            
            id='NewAdFormName'>
          </Input>     
        </div>
        <div className='contact-info'>
          <label htmlFor='NewAdFormName'>
            Mail: <Required/> 
          </label>
          <Input 
            name='mail'
            type='text'
            required
            id='NewAdFormName'>
          </Input>     
        </div>
        <div className='submitButton'>
          <Button onSubmit={this.sumitHandler}>
            Submit
          </Button>
        </div>
        <div className='cancelButton'>
          <Link to="/">
            <Button onClick={this.cancelHandler}>
              Cancel
            </Button>
          </Link>
        </div>
      </form>
      
    )
  }
}