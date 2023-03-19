import { TemplateType } from 'src/components/modules/Templates/Template.types'


export type User = {
  id: number,
  email: string,
  name: string,
  referral_code: string
}
export type InitialUserState = {
  loading: boolean,
  roles: ['user', 'admin'] | null,
  balance: number | null,
  token: string | null,
  user: User | null
  statistic: Statistic[],
  referrals: Referral[],
  referralsStatistic: ReferralStatistic[],
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
  user: User
}

export type Statistic = {
  day: string,
  requestCount: string,
  totalTokens: string
}

export type Referral = {
  id: number,
  createdAt: number,
  referee: {
    email: string,
    name: string
  }
}

export type ReferralStatistic = {
  id: number,
  createdAt: number,
  amount: number,
  reason: ReferralReason,
  referralHistoryFrom: User,
  retrieved: boolean
}

export enum ReferralReason {
  registration = 'За регистрацию',
  replenishment = 'За пополнение',
}