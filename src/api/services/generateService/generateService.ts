import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'

type Body = {
  data: {
    product_name: string
    need_seo: boolean
    need_params: boolean
    short_description: string
  },
  serviceId: string | null
}
type PostBody = { post_theme: string; mood: string }

class GenerateService extends HttpClient {
  constructor() {
    super()
  }


  generate = async (body: any, route: string) => {
    try {
      const response = await this.instance.post(route, body)

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }
  generateWb = async (body: Body) => {
    try {
      const response = await this.instance.post(Endpoints.generate.product.wb, body)

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }

  generateOzon = async (body: Body) => {
    try {
      const response = await this.instance.post(Endpoints.generate.product.ozon, body)

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }

  generateAmazon = async (body: Body) => {
    try {
      const response = await this.instance.post(Endpoints.generate.product.amazon, body)

      return response.data
    } catch (e: any) {
      throw Error(e)
    }
  }

  generateTelegramPost = async (body: PostBody) => {
    try {
      const response = await this.instance.post(Endpoints.generate.post.telegram, body)

      return response.data
    }catch (e: any) {
      throw Error(e)
    }
  }

  generateRewriteText = async (body: PostBody) => {
    try {
      const response = await this.instance.post(Endpoints.rewrite.text, body)

      return response.data
    }catch (e: any) {
      throw Error(e)
    }
  }

  generatePostText = async (body: PostBody) => {
    try {
      const response = await this.instance.post(Endpoints.post.text, body)
      return response.data
    }catch (e: any) {
      throw Error(e)
    }
  }

  generateTikTokTitle = async (body: PostBody) => {
    try {
      const response = await this.instance.post(Endpoints.generate.title.tiktok, body)
      return response.data
    }catch (e: any) {
      throw Error(e)
    }
  }
}

export const generateService = new GenerateService()
