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
  // getAd(adId) {
  //   return fetch(`${config.API_ENDPOINT}/ads/${adId}`, {
  //     headers: {
  //       'authorization': `basic ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // post ad 
  postAd(brand, model, car_year, photos_link, price, description, name, phone, mail){
    return fetch(`${config.API_ENDPOINT }/ads`,{
      method: 'POST',
      header: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        brand: brand,
        model: model, 
        car_year: car_year, 
        photos_link: photos_link, 
        price: price, 
        description: description, 
        name: name, 
        phone: phone, 
        mail: mail,
      }),
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default AdApiService
