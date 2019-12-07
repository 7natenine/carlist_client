import TokenService from '../services/token-service'
import config from '../config'

const AdApiService = {
  getAds() {
    return fetch(`${config.API_ENDPOINT}/ads`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getAd(adId) {
    return fetch(`${config.API_ENDPOINT}/ads/${adId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // post ad 

}

export default AdApiService
