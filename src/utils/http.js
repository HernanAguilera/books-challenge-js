import axios from 'axios'

class HttpClient {
  constructor () {
    this.client = axios.create({
      baseURL: 'http://127.0.0.1:3000/api/'
    })
  }

  get (url, data) {
    return this.client.get(url, data)
  }

  post (url, data) {
    return this.client.post(url, data)
  }

  put (url, data) {
    return this.client.put(url, data)
  }

  patch (url, data) {
    return this.client.patch(url, data)
  }

  delete (url, data) {
    return this.client.delete(url, data)
  }

  setToken (token) {
    this.client.defaults.headers.common['Authorization'] = `token ${token}`
  }

  unsetToken () {
    delete this.client.defaults.headers.common['Authorization']
  }
}

export default new HttpClient()
