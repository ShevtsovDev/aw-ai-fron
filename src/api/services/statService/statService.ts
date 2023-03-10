import { HttpClient } from 'src/api/httpClient/httpClient'


class StatService extends HttpClient {


  setStat = async (id: string | number) => {
    await this.instance.get(`/services/stat/${id}`)
  }

}

export const statService = new StatService()