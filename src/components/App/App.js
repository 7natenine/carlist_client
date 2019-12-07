import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import InventoryPage from '../../routes/InventoryPage/InventoryPage'
import AccountPage from '../../routes/AccountPage/AccountPage'
import NewAdPage from '../../routes/NewAdPage/NewAdPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

class App extends Component { 
  state = { hasError: false }

  static getDerivedStateFromError(error) { 
    console.error(error)
    return { hasError: true}
  }

  render() { 
    return ( 
      <div className='App'> 
        <header className='App_header'>
          <Header /> 
        </header> 
        <main className='App_main'>
          {this.state.hasError && <p className='red'> There was an Error</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={HomePage}
            />
            <Route
              path={'/login'}
              component={LoginPage}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/ads'}
              component={InventoryPage}
            />
            <Route
              path={'/new-post'}
              component={NewAdPage}
            />
            <Route
              path={'/my-account'}
              component={AccountPage}
            />
            <Route
              path={'/ad/:adId'}
              component={NewAdPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;


