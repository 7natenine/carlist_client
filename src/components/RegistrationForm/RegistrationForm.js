import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'

export default class LoginForm extends Component { 
  static defaultProps = { 
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => { 
    ev.preventDefault()
    const { full_name, username, password, email, phone_number } = ev.target

    full_name.value = ''
    username.value = ''
    password.value = ''
    email.value = ''
    phone_number.value = ''
    this.props.onRegistrationSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className='RegistrationForm'
        onSubmit= {this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div> 
        <div className='full_name'> 
          <label htmlFor='RegistrationForm_full_name'>
          Full name <Required /> 
          </label> 
          <Input 
            name='full_name'
            type='text'
            required
            id ='RegistrationForm_full_name'>
          </Input>
        </div> 
        <div className ='username'>
          <label htmlFor='RegistrationForm_username'> 
          User name <Required /> 
          </label> 
          <Input 
            name='username'
            type='text'
            required 
            id = 'RegistrationForm_username'> 
          </Input>
        </div> 
        <div className = 'password'> 
          <label htmlFor='RegistrationForm_password'> 
          Password <Required /> 
          </label> 
          <Input 
            name='password'
            type='password'
            required
            id='RegistrationForm_password'> 
          </Input>    
        </div> 
        <div className = 'email'> 
          <label htmlFor='RegistrationForm_email'> 
          Email <Required /> 
          </label> 
          <Input 
            name='email'
            type='email'
            required 
            id='RegistrationForm_email'> 
          </Input> 
        </div> 
        <div className = 'phone_number'> 
          <label htmlFor='RegistrationForm_phone_number'> 
          Phone number <Required /> 
          </label>
          <Input 
            name='phone_number'
            type='tel'
            pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
            required 
            id='RegistrationForm_phone_number'> 
          </Input> 
        </div> 
        <Button type='submit'> 
          Register
        </Button> 
      </form>
    )   
  }
}

