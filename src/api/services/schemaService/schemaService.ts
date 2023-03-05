import { HttpClient } from 'src/api/httpClient/httpClient'


class SchemaService extends HttpClient {


  fetchSchemas = async <T>(): Promise<T> => {
    const response = await this.instance.get<T>('/services/')
    return response.data
  }

}

export const schemaService = new SchemaService()