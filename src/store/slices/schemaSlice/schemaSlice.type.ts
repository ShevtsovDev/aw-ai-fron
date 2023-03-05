import { TemplateType } from 'src/components/modules/Templates/Template.types'

export type InitialSchemaState = {
  schemas: TemplateType[]
  loading: boolean,
  selectedSchema: TemplateType | null
}

export type FetchSchemas = {
  services: TemplateType[]
}