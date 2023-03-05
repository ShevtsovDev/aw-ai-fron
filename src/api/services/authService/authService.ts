import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'


class AuthService extends HttpClient {

  singInWithPasswordAndEmail = async <T>(data: {email: string, password: string}) => {
    try {
      const response = await this.instance.post<T>(Endpoints.auth.singInWithPasswordAndEmail, data)
      this.recreateInstance()
      return response.data
    } catch (e: any) {
      throw Error(e.message)
    }
  }

  signInWithToken = async <T>({ token }: { token: string }) => {
    try {
      const response = await this.instance.post<T>(Endpoints.auth.signInWithToken, { token })
      return response.data
    }catch (e: any) {
      throw Error(e.message)
    }
  }

  signUpWithPasswordAndEmail = async (data: {email: string, password: string, name: string}) => {
    const response = await this.instance.post(Endpoints.auth.signUpWithPasswordAndEmail, data)
    return response.data
  }
}

export const authService = new AuthService()