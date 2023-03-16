

export type Doc = {
  name: string,
  uuid: string,
  content: string,
}

export type InitialDocsState = {
  docs: Doc[],
  loading: boolean,
  saving: boolean
  saved: boolean
}

