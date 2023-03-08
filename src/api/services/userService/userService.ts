import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'


class UserService extends HttpClient {
  fetchUser = async (id: number) => {
    const response = await this.instance.get(Endpoints.user.fetchUserById + `${id}`)
    return response.data
  }

  fetchBalance = async <T>() => {
    const response = await this.instance.get<T>(Endpoints.user.fetchBalance)
    return response.data
  }

  fetchStatistic = async <T>() => {
    const response = await this.instance.get<T>(Endpoints.user.fetchStatistic)
    return response.data
  }


}

export const userService = new UserService()