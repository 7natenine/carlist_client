import React, { Component } from 'react'
import { Button, Textarea, InputFile, Input } from '../Utils/Utils'

export default class newAdForm extends Component { 
  static contextType = AdContext

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

  onSubmithandler = event => { 
    // this.setState({ 
    //    
    // })
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
      >
        <div className='brand'> 
          <Input type='text' onSubmit={this.onSubmitHandler}>
            Brand:
          </Input>
        </div>
        <div className='model'> 
          <Input type='text' onSubmit={this.onSubmitHandler}>
            Model: 
          </Input>
        </div>
        <div className='year'> 
          <Input type='text' pattern="[0-9]{4}" onSubmit={this.onSubmitHandler}>
            Year:(ex. 2019)
          </Input>
        </div>
        <div className='description'>
          <Textarea type='text' onSubmite={this.onSubmitHandler}>
            Description: 
          </Textarea>
        </div>
        <div className='image'>
          <InputFile type='file' onChange={this.fileSelectedHandler}>
            Add Image 
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
        </div>
      </form>
      
    )
  }
}