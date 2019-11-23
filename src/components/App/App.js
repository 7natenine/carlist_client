import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage
import InventoryPage
import SearchPage
import MyAccount

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
              path={'/inventory'}
              component={InventoryPage}
            />
            <Route
              path={'/search'}
              component={SearchPage}
            />
            <Route
              path={'/my-account'}
              component={MyAccount}
            />
            <Route
              path={'/ad/:adId'}
              component={AdPage}
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


