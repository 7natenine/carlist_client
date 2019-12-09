import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
// import './Header.css'
import TokenService from '../../services/token-service'
import { Hyph } from '../Utils/Utils'


export default class Header extends Component { 

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header_logged-in'>
        <Link onClick={this.handleLogoutClick} to='/'>
          Logout 
        </Link>
      </div>  
    )
  }

  renderLoginLink() { 
    return( 
      <div className='Header_logged-out'> 
        <Link onClick={this.handleRegisterClick} to='/register'>
         Register
        </Link> 
        <Hyph /> 
        <Link onClick={this.handleLoginClick} to='/login'> 
          Login 
        </Link> 
      </div> 
    )
  }

  render() {
    return (
      <nav className='Header'> 
        <Link to="/">New Search</Link>
        <Link to="/ads">Inventory</Link> 
        <Link to="/new-post">+newPost</Link> 
        <Link to="/my-account">My Account</Link> 
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}