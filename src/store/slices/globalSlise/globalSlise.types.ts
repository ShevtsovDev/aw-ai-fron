export type InitialGlobalState = {
  globalLoading: boolean
}


export type Role = {
  id: number,
  name: string
}

export type BalanceType = {
  readonly id: number,
  readonly amount: number,
}

export type UserType = {
  readonly id: number,
  readonly email: string,
  readonly name: string,
  readonly telegram: string,
  readonly createdAt: string,
  readonly updatedAt: string
  readonly Roles: Role[]
  readonly Balance: BalanceType
}

export type ServiceType = {
  readonly id: number,
  readonly title: string,
  readonly subtitle: string,
}

export type HistoryType = {
  readonly id: number,
  readonly User: UserType,
  readonly Service: ServiceType
  readonly serviceId: number,
  readonly createdAt: string,
  readonly updatedAt: string,
  readonly requestEndpoint: string,
  readonly requestText: string,
  readonly responseText: string,
  readonly tokensSpent: string,
}

export type StatisticType = {
  serviceId: number,
  count: string | number;
}

