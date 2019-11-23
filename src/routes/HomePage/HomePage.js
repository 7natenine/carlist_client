import React, { Component } from 'react'
import HomeForm from '../../components/HomeForm/HomeForm'
import { Section } from '../../components/Utils/Utils'

export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  render() {
    return (
      <Section className='HomePage'> 
        <h2>Welcome to Carlist</h2>
        <HomeForm /> 
      </Section>
    );
  }
}
