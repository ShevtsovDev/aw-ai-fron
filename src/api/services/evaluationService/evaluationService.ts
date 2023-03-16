import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'


class EvaluationService extends HttpClient {
  like = async (id: number): Promise<void> => {
    try {
      const response = await this.instance.get(`${Endpoints.evaluation}${id}/like`)
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  dislike = async (id: number): Promise<void> => {
    try {
      const response = await this.instance.get(`${Endpoints.evaluation}${id}/dislike`)
    } catch (e: any) {
      return Promise.reject(e)
    }
  }
}

export const evaluationService = new EvaluationService()