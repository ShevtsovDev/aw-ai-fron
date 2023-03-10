import { HttpClient } from 'src/api/httpClient/httpClient'
import { Endpoints } from 'src/api/endpoints/endpoints'


class AdminService extends HttpClient {

  fetchUsers = async <T>(page: string, pageSize: number, order: string | null) => {
    try {
      const response = await this.instance.get<T>(Endpoints.admin.users, {
        params: {
          page,
          pageSize,
          order
        }
      })

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  fetchHistory = async <T>(page: string, pageSize: number, order?: string | null, filter?: string | null) => {
    try {
      const response = await this.instance.get<T>(Endpoints.admin.history, {
        params: {
          page,
          pageSize,
          order,
          filter
        }
      })

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }

  fetchStatistic = async <T>() => {
    try {
      const response = await this.instance.get<T>(Endpoints.admin.statistic)

      return response.data
    } catch (e: any) {
      return Promise.reject(e)
    }
  }
}

export const adminService = new AdminService()