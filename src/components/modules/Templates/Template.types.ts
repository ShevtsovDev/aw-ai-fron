export type TemplateCardStatus = {
  name: string,
  id: number,
}


export type TemplateType = {
  id: number,
  title: string,
  subtitle: string,
  status: TemplateCardStatus[],
  icon: 'ozon' | 'wb' | 'amazon' | 'telegram',
  isFavorite: boolean,
  schema: [
    {
      name: string,
      id: number,
      fields: {
        fields: {
          name: string,
          type: string,
          group: string,
          placeholder: string,
          label?: string
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
  ]
}

export type TemplateCardFC = {
  template: TemplateType
}

export type TemplateBadgeFC = {
  badge: TemplateCardStatus
}