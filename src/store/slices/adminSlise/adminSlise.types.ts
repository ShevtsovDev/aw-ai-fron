export type InitialAdminState = {

}


export type Role = {
  id: number,
  name: string
}

export type UserType = {
  readonly id: number,
  readonly email: string,
  readonly name: string,
  readonly telegram: string,
  readonly createdAt: string,
  readonly updatedAt: string
  readonly Roles: Role[]
}

export type HistoryType = {
  readonly id: number,
  readonly User: UserType,
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

