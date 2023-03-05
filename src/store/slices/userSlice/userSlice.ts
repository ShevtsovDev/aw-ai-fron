import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchSchemas, InitialSchemaState } from 'src/store/slices/schemaSlice/schemaSlice.type'
import { schemaService } from 'src/api/services/schemaService/schemaService'
import { TemplateType } from 'src/components/modules/Templates/Template.types'
import { RootState, store } from 'src/store/store'
import {
  InitialUserState,
  SighInPayload,
  SighUpPayload,
  SignInResponse,
} from 'src/store/slices/userSlice/userSlice.types'
import { authService } from 'src/api/services/authService/authService'
import { userService } from 'src/api/services/userService/userService'

const initialState: InitialUserState = {
  loading: false,
  balance: null,
  roles: null,
  user: null,
  token: null
}

const SLICE_NAME = 'USER_SLICE'

export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startFetching: (state, action) => {
      state.loading = true
    },
    endFetching: (state, action) => {
      state.loading = false
    },
  },
  extraReducers: builder => {
    builder.addCase(sighIn.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.balance = action.payload.balance
      state.roles = action.payload.roles
      localStorage.setItem('aw-ai-token', action.payload.token)
    })
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      state.balance = action.payload
    })
    builder.addCase(sighInByToken.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.balance = action.payload.balance
      state.roles = action.payload.roles
      localStorage.setItem('aw-ai-token', action.payload.token)
    })
  }
})

export const sighIn = createAsyncThunk<SignInResponse, SighInPayload>(
  `${SLICE_NAME}/signIn`,
  async (arg, thunkAPI) => {
    const response = await authService.singInWithPasswordAndEmail<SignInResponse>(arg)
    return response
  }
)

export const sighInByToken = createAsyncThunk<SignInResponse, { token: string }>(
  `${SLICE_NAME}/sighInByToken`,
  async (arg, thunkAPI) => {
    const response = await authService.signInWithToken<SignInResponse>(arg)
    console.log(response)
    return response
  },
)

export const sighUp = createAsyncThunk<void, SighUpPayload>(
  `${SLICE_NAME}/signIn`,
  async (arg, thunkAPI) => {
    const response = await authService.signUpWithPasswordAndEmail(arg)
    console.log(response)

  }
)

export const fetchUser = createAsyncThunk(
  `${SLICE_NAME}/fetchUser`,
  async (arg, thunkAPI) => {

  }
)

export const fetchBalance = createAsyncThunk(
  `${SLICE_NAME}/fetchBalance`,
  async (arg, thunkAPI) => {
    const response = await userService.fetchBalance<{ balance: number}>()

    return response.balance

  }
)

export const getToken = (state: RootState) => state.user.token
export const getBalance = (state: RootState) => state.user.balance
export const getUser = (state: RootState) => state.user

export const { startFetching, endFetching } = userSlice.actions

export default userSlice.reducer