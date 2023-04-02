import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'


class ChatService extends HttpClient {
  fetchChats = async <T>(): Promise<T> => {
    try {
      const response = await this.instance.get<T>(Endpoints.chat.getAll)

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  fetchTemplates = async <T>(): Promise<T> => {
    try {
      const response = await this.instance.get<T>(Endpoints.chat.getTemplates)

      return response.data
    }catch (e) {
      return Promise.reject(e)
    }
  }

  createChat = async <T>({userId, template}: {userId: number, template: string}): Promise<T> => {
    try {
      const response = await this.instance.post<T>(Endpoints.chat.create, {userId, template})

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }
}



export const chatService = new ChatService()