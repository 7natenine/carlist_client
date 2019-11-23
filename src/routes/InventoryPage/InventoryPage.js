import React, { Component } from 'react'
import AdListContext from '../../contexts/ArticleListContext'
import AdApiService from '../../services/ad-api-service'
import { Section } from '../../components/Utils/Utils'
import InventoryForm from '../../components/InventoryForm/InventoryForm'

export default class InventoryForm extends Component {
  static contextType = AdListContext

  componentDidMount() {
    this.context.clearError()
    AdApiService.getAds()
      .then(this.context.setAdList)
      .catch(this.context.setError)
  }

  renderAds() {
    const { adList = [] } = this.context
    return adList.map(ad =>
      <AdListItem
        key={ad.id}
        ad={ad}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='InventoryForm'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderAds()}
      </Section>
    )
  }
}
