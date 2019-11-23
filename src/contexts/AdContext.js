import React, { Component } from 'react'

export const nullAd = { 
  creator: {},
  tags: [], 
}

const AdContext = React.createContext({
  ad: nullAd, 
  error: null, 
  setError: () => {},
  clearError: () => {},
  setAd: () => {},
  clearAd: () => {},
})

export default AdContext

export class AdProvider extends Component { 
  state = { 
    ad: nullAd, 
    error: null 
  };

  setError = error => { 
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setAd = ad => {
    this.setState({ ad })
  }
  
  clearAd = () => {
    this.setAd(nullAd)
  }

  render() {
    const value = {
      ad: this.state.ad,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAd: this.setAd,
      clearAd: this.clearAd,
    }
    return (
      <AdContext.Provider value={value}>
        {this.props.children}
      </AdContext.Provider>
    )
  }
}