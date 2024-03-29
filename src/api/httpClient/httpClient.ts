import axios from 'axios'

export class HttpClient {
  public instance

  constructor() {
    const _instance = axios.create({
      baseURL: process.env.REACT_APP_API_HOST,
    })

    _instance.interceptors.request.use(
      function (config) {
        config.headers.set('Authorization', `Bearer ${localStorage.getItem('aw-ai-token')}`)
        return config
      },
      function (error) {
        return Promise.reject(error)
      },
    )

    _instance.interceptors.response.use(
      function (config) {
        return config
      },
      function (error) {

        if (error.response.status === 401) {
          if (window.location.href.includes('auth')) {

          } else {
            window.location.href = '/auth/sign-in'
          }

        }
        return Promise.reject(error.response.data.message)

      },
    )

    this.instance = _instance
  }

  recreateInstance = () => {
    this.instance.interceptors.request.use(
      function (config) {
        config.headers.set('Authorization', `Bearer ${localStorage.getItem('aw-ai-token')}`)
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      },
    )
  }
}

