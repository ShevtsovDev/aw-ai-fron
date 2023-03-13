import { TemplateType } from 'src/components/modules/Templates/Template.types'

export type InitialUserState = {
  loading: boolean,
  roles: ['user', 'admin'] | null,
  balance: number | null,
  token: string | null,
  user: {
    id: number,
    email: string,
    name: string,
  } | null
  statistic: Statistic[]
}

export type FetchSchemas = {
  services: TemplateType[]
}

export type SighUpPayload = {
  name: string,
  email: string,
  password: string,
  ref: string | null
}


export type SighInPayload = {
  email: string,
  password: string
}

export type SignInResponse= {
  roles: ['user', 'admin'],
  balance: number,
  token: string,
  user: {
    id: number,
    email: string,
    name: string,
  }
}

export type Statistic = {
  day: string,
  requestCount: string,
  totalTokens: string
}