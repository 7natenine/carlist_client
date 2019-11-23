import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdContext, { nullAd } from '../../contexts/AdContext'
import AdApiService from '../../services/ad-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import StyleIcon from '../../components/StyleIcon/StyleIcon'
import './AdPage.css'

export default class AdPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = AdContext

  componentDidMount() {
    const { adId } = this.props.match.params
    this.context.clearError()
    AdApiService.getAd(adId)
      .then(this.context.setAd)
      .catch(this.context.setError)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearAd()
  }

  renderAd() {
    const { ad } = this.context
    return <>
      <h2>{ad.title}</h2>
      <p>
        <AdStyle ad={ad} />
        {ad.creator.id && <>
          <Hyph />
          <AdCreator ad={ad} />
        </>}
        <Hyph />
        <NiceDate date={ad.date_created} />
      </p>
      <AdContent ad={ad} />
    </>
  }

  render() {
    const { error, ad } = this.context
    let content
    if (error) {
      content = (error.error === `Ad doesn't exist`)
        ? <p className='red'>Ad not found</p>
        : <p className='red'>There was an error</p>
    } else if (!ad.id) {
      content = <div className='loading' />
    } else {
      content = this.renderAd()
    }
    return (
      <Section className='AdPage'>
        {content}
      </Section>
    )
  }
}

function AdCreator({ ad = nullAd }) {
  return (
    <span className='AdPage_creator'>
      {ad.creator.full_name}
    </span>
  )
}

function AdContent({ ad }) {
  return (
    <p className='AdPage_content'>
      {ad.content}
    </p>
  )
}


