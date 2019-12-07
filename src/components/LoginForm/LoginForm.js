import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component { 
  static defaultProps = { 
    onLoginSuccess: () => {}
  }

  state= { 
    error: null 
  }

  handleSubmitBasicAuth = ev => { 
    ev.preventDefault()
    const { username, password } = ev.target

    // CHECKS remember to remove
    // console.log('login form submitted')
    // console.log({username, password})

    TokenService.saveAuthToken( 
      TokenService.makeBasicAuthToken(username.value, password.value)
    )

    //resetting values
    username.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  handleSubmitJwtAuth = ev => { 
    ev.preventDefault()
    this.setState({error:null})
    const{ username, password } = ev.target
  

    AuthApiService.postLogin({ 
      username: username.value, 
      password: password.value,
    })
      .then(res => { 
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => { 
        this.setState({error: res.error})
      })

  }

  render() { 
    const { error } = this.state
    return (
      <form 
        className='LoginForm'
        onSubmit={this.handleSubmitjwtAuth}
      >

        <div role='alert'> 
          {error && <p> className ='red'>{error}</p>}
        </div> 
        <div className='username'> 
          <label htmlFor='LoginForm_username'>
            User name 
          </label> 
          <Input 
            name='username'
            if='LoginForm_username'> 
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