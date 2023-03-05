import axios from 'axios'

export class HttpClient {
  public instance

  constructor() {
    const _instance = axios.create({
      baseURL: 'http://localhost:4001/api/v1/'
    })

    _instance.interceptors.request.use(function (config) {
      config.headers.set('Authorization', `Bearer ${localStorage.getItem('aw-ai-token')}`)
      return config;
    }, function (error) {
      console.log(error)
      return Promise.reject(error);
    });

    _instance.interceptors.response.use(function (config) {

      return config;
    }, function (error) {
      console.log(error)
      if (error.response.status === 401) {
        window.location.href = '/auth/sign-in'
      }
      return Promise.reject(error);
    });

    this.instance = _instance
  }

  recreateInstance = () => {
    this.instance.interceptors.request.use(function (config) {
      config.headers.set('Authorization', `Bearer ${localStorage.getItem('aw-ai-token')}`)
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
  }

}
