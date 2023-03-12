import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'

class SchemaService extends HttpClient {
  fetchSchemas = async <T>(): Promise<T> => {
    const response = await this.instance.get<T>('/services/')
    return response.data
  }

  fetchSchemaById = async <T>(id: string | number): Promise<T> => {
    const response = await this.instance.get(Endpoints.service.schema + id)
    return response.data
  }

  fetchHistory = async <T>(id: string | number): Promise<T> => {
    const response = await this.instance.get(Endpoints.service.history + id)
    return response.data
  }
}

export const schemaService = new SchemaService()
