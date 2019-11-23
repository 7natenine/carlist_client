import React, { Component } from 'react'
import AccountForm from '../../components/AccountForm/Form'
import { Section } from '../../components/Utils/Utils'

// If logged in you can accesss your listings and Information
// If not logged in it wil prompt you to log in. 

export default class AccountPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  render() {
    return (
      <Section className='AccountPage'> 
        <h2>My Account</h2>
        <AccountForm /> 
      </Section>
    );
  }
}
