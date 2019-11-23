import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'

export default class LoginForm extends Components { 
  static defaultProps = { 
    onLoginSuccess: () => {}
  }

  state= { 
    error: null 
  }

  handleSubmitBasicAuth = ev => { 
    ev.preventDefault()
    const { user_name, password } = ev.target

    // CHECKS remember to remove
    console.log('login form submitted')
    console.log({user_name, password})

    //resetting values
    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() { 
    const { error } = this.state
    return (
      <form 
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >

        <div role='alert'> 
          {error && <pclassName ='red'>{error}</p>}
        </div> 
        <div className='user_name'> 
          <label htmlFor='LoginForm_user_name'>
            User name 
          </label> 
          <Input 
            name='user_name'
            if='LoginForm_user_name'> 
          </Input> 
        </div> 
        <div className='password'> 
          <label htmlFor='LoginForm_password'> 
           Password
          </label> 
          <Input 
            name='password'
            type='password'
            id='LoginForm_password'>
          </Input> 
        </div> 
          <Button type='submit'> 
            Login
          </Button>
        </form> 
    )
  }
}