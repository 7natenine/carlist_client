import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import NewAdForm from '../../components/NewAdForm/NewAdForm'

export default class NewAdPage extends Component { 
  static defaultProps = { 
    history: { 
      push: ()=> {},
    },
  }

  //push back to home page
  handleNewAdSuccess = user => { 
    const { history } = this.props
    history.push('/')
  }

  render() { 
    return (
      <Section className='NewAdPage'> 
        <h2>New Ad</h2>
        <NewAdForm
          onNewAdSuccess={this.handleNewAdSuccess}
        />
      </Section>
    )
  }
}