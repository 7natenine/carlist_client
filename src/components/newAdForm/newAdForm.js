import React, { Component } from 'react'
import { Button, TextArea, Input, Required } from '../Utils/Utils'

export default class NewAdForm extends Component { 

  state = { 
    selectedFile: null,
    Brand: null,
    Model: null, 
    year: null 
  }

  fileSelectedHandler = event => { 
    this.setState({ 
      selectedFile: event.target.files[0]
    })
  }

  onSubmithandler = ev => { 
    const { brand, model, car_year, photos_link, price, description, image } = ev.target

    brand.value = ''
    model.value = ''
    car_year.value = ''
    photos_link.value = ''
    price.value = ''
    description.value = ''
    image.value = ''
    this.props.onNewAdSuccess()
  }

  fileUploadHandler = event => { 
    //upload to database 
  }

  cancelHandler = event => { 
    //route to homepage
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
            name='model '
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
        <div className='submitButton'>
          <Button onClick={this.cancelHandler}>
            Submit
          </Button>
        </div>
      </form>
      
    )
  }
}