import React, { Component } from 'react'
import AdListContext from '../../contexts/AdListContext'
import AdApiService from '../../services/ad-api-service'
import { Section } from '../../components/Utils/Utils'
import InventoryForm from '../../components/InventoryForm/InventoryForm'

export default class InventoryPage extends Component {
  static contextType = AdListContext

  // state = { 
  //   adlist: []
  // };

  componentDidMount() {
    this.context.clearError()
    AdApiService.getAds()
      .then(this.context.setAdList)
      .catch(this.context.setError)
  }
// check this.context.adList
  renderAds() {
    const { adList = [] } = this.context
    // console.log(adList)
    return adList.map ( ad =>
      <InventoryForm
        key={ad.id}
        ad={ad}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='InventoryForm'>
        <h2>Inventory</h2>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderAds()}
      </Section>
    )
  }
}
