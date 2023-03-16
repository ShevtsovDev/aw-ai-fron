import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'


class DocsService extends HttpClient {
  fetchDocs = async <T>(): Promise<T> => {
    try {
      const response = await this.instance.get<T>(Endpoints.docs.getAll)

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  fetchDocByUUID = async <T>(uuid: string): Promise<T> => {
    try {
      const response = await this.instance.get<T>(Endpoints.docs.getOne + '/' + uuid)

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  createDoc = async (content: string): Promise<{ message: string, uuid: string }> => {
    try {
      const response = await this.instance.post(Endpoints.docs.create, {
        content,
      })

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  saveDoc = async (uuid: string, content: string): Promise<void> => {
    try {
      const response = await this.instance.patch(Endpoints.docs.create + '/' + uuid, {
        content,
      })

      return
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  addToExistenceDoc = async (content: string, uuid: string): Promise<void> => {
    try {
      const response = await this.instance.post(`${Endpoints.docs.add}/${uuid}`, {
        content
      })

      return
    }catch (e) {

    }
  }
}



export const docsService = new DocsService()