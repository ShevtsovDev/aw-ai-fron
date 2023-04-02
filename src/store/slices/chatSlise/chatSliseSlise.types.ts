export type InitialChatState = {
  chats: Chat[]
  templates: Template[]
}

export type Chat = {
  uuid: string,
  createdAt: string
  chatTemplate: Template
}

export type Template = {
  name: string,
  description: string,
  icon: string,
  uuid: string
}

