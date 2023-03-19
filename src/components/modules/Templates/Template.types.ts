export type TemplateCardStatus = {
  name: string,
  id: number,
}

export type SchemaType = {
  name: string,
    id: number,
    fields: {
    fields: {
      name: string,
        type: string,
        group: string,
        placeholder: string,
        label?: string,
        maxLength?: number
    }[],
      groups: {
      name: string,
        title: string,
        subtitle: string,
        orientation: string,
        col?: number
    }[],
  }
}

export type HistoryType = {
  readonly UserId: number,
  readonly id: number,
  readonly requestText: string,
  readonly responseText: string,
  readonly tokensSpent: number,
  readonly like: boolean,
  readonly dislike: boolean,
}

export type TemplateType = {
  id: number,
  title: string,
  subtitle: string,
  status: TemplateCardStatus[],
  icon: string,
  isFavorite: boolean,
  schema: SchemaType[]
}

export type TemplateCardFC = {
  template: TemplateType
}

export type TemplateBadgeFC = {
  badge: TemplateCardStatus
}