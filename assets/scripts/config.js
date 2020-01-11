'use strict'

let apiUrl
const apiUrls = {
  production: 'https://vast-escarpment-21529.herokuapp.com/',
  // change back to localhost:4741 once we clone our server repo down locally
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
