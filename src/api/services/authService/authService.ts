import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'


class AuthService extends HttpClient {

  singInWithPasswordAndEmail = async <T>(data: {email: string, password: string}) => {
    try {
      const response = await this.instance.post<T>(Endpoints.auth.singInWithPasswordAndEmail, data)
      this.recreateInstance()
      return response.data
    } catch (e: any) {
      return Promise.reject(e)
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

  signUpWithPasswordAndEmail = async <T>(data: {email: string, password: string, name: string, ref: string | null}): Promise<T> => {
    const response = await this.instance.post(Endpoints.auth.signUpWithPasswordAndEmail, data, {
      params: {
        ref: data.ref ?? ''
      }
    })
    this.recreateInstance()
    return response.data
  }
}

export const authService = new AuthService()