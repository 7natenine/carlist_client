import React, { Component } from 'react'

const AdListContext = React.createContext({
  adList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setAdList: () => {},
})
export default AdListContext

export class AdListProvider extends Component {
  state = {
    adList: [],
    error: null,
  };

  setAdList = adList => {
    this.setState({ adList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      adList: this.state.adList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAdList: this.setAdList,
    }
    return (
      <AdListContext.Provider value={value}>
        {this.props.children}
      </AdListContext.Provider>
    )
  }
}
