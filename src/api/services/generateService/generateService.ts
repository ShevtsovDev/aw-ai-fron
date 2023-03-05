import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'

type Body = {
  product_name: string
  need_seo: boolean
  need_params: boolean
  short_description: string
}
type PostBody = { post_theme: string; mood: string }

class GenerateService extends HttpClient {
  constructor() {
    super()
  }

  generateWb = async (body: Body) => {
    try {
      const response = await this.instance.post(Endpoints.generate.product.wb, body)

      return response.data
    } catch (e: any) {
      throw Error(e.message)
    }
  }

  generateOzon = async (body: Body) => {
    try {
      const response = await this.instance.post(Endpoints.generate.product.ozon, body)

      return response.data
    } catch (e: any) {
      throw Error(e.message)
    }
  }

  generateAmazon = async (body: Body) => {
    try {
      const response = await this.instance.post(Endpoints.generate.product.amazon, body)

      return response.data
    } catch (e: any) {
      throw Error(e.message)
    }
  }

  generateTelegramPost = async (body: PostBody) => {
    try {
      const response = await this.instance.post(Endpoints.generate.post.telegram, body)

      return response.data
    }catch (e: any) {
      throw Error(e.message)
    }
  }
}

export const generateService = new GenerateService()
