import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'
import { toast } from 'react-toastify'

class ReferralsService extends HttpClient {
  getAllReferrals = async <T>() => {
    try {
      const response = await this.instance.get<T>(Endpoints.referrals.getAll)

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }
  getReferralsStatistic = async <T>() => {
    try {
      const response = await this.instance.get<T>(Endpoints.referrals.getStatistic)

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  getRetrieved = async (id: number) => {
    try {
      await this.instance.get(`${Endpoints.referrals.retrieved}/${id}`)
    }catch (e: any) {
      toast(e, {
        type: 'error'
      })
      return Promise.reject(e)
    }
  }

  getRetrievedAll = async () => {
    try {
      await this.instance.get(`${Endpoints.referrals.retrieved}/`)
    }catch (e: any) {
      toast(e, {
        type: 'error'
      })
      return Promise.reject(e)
    }
  }
}

export const referralsService = new ReferralsService()
