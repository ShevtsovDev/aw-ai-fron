import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Chat, InitialChatState, Template } from './chatSliseSlise.types'
import { chatService } from 'src/api/services/chatService/chatService'
import { fetchDocs } from 'src/store/slices/docsSlice/docsSlice'
import { RootState } from 'src/store/store'

const initialState: InitialChatState = {
  templates: [],
  chats: [],
}

const SLICE_NAME = 'CHAT_SLICE'

export const chatSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.templates = action.payload
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.chats = action.payload
      })
})

export const fetchTemplates = createAsyncThunk(
  `${SLICE_NAME}/fetchTemplates`,
  async (arg, thunkAPI) => {
    const response = await chatService.fetchTemplates<{ data: Template[] }>()
    return response.data
  },
)

export const fetchChats = createAsyncThunk(
  `${SLICE_NAME}/fetchChats`,
  async (arg, thunkAPI) => {
    const response = await chatService.fetchChats<{data: Chat[]}>()
    return response.data
  },
)


export const getChats = (state: RootState) => state.chat.chats
export const getTemplates = (state: RootState) => state.chat.templates

export const {} = chatSlice.actions

export default chatSlice.reducer
