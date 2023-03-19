import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchSchemas, InitialSchemaState } from 'src/store/slices/schemaSlice/schemaSlice.type'
import { schemaService } from 'src/api/services/schemaService/schemaService'
import { TemplateType } from 'src/components/modules/Templates/Template.types'
import { RootState, store } from 'src/store/store'
import {
  InitialUserState,
  Referral, ReferralStatistic,
  SighInPayload,
  SighUpPayload,
  SignInResponse,
  Statistic,
} from 'src/store/slices/userSlice/userSlice.types'
import { authService } from 'src/api/services/authService/authService'
import { userService } from 'src/api/services/userService/userService'
import { referralsService } from 'src/api/services/referralsService/referralsService'

const initialState: InitialUserState = {
  loading: false,
  balance: null,
  roles: null,
  user: null,
  token: null,
  statistic: [],
  referrals: [],
  referralsStatistic: [],
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
    logoutUser: state => {
      localStorage.removeItem('aw-ai-token')
      state.token = null
      window.location.href = '/auth/sign-in'
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sighIn.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.balance = action.payload.balance
        state.roles = action.payload.roles
        state.token = action.payload.token
        localStorage.setItem('aw-ai-token', action.payload.token)
      })
      .addCase(singUp.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.balance = action.payload.balance
        state.roles = action.payload.roles
        state.token = action.payload.token
        localStorage.setItem('aw-ai-token', action.payload.token)
      })
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.balance = action.payload
      })
      .addCase(sighInByToken.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.balance = action.payload.balance
        state.roles = action.payload.roles
        localStorage.setItem('aw-ai-token', action.payload.token)
        setTimeout(() => {}, 500)
      })
      .addCase(fetchStatistic.fulfilled, (state, action) => {
        state.statistic = action.payload
      })
      .addCase(fetchReferrals.fulfilled, (state, action) => {
        state.referrals = action.payload
      })
      .addCase(fetchReferralsStatistic.fulfilled, (state, action) => {
        state.referralsStatistic = action.payload
      })
  },
})

export const sighIn = createAsyncThunk<SignInResponse, SighInPayload>(
  `${SLICE_NAME}/signIn`,
  async (arg, thunkAPI) => {
    const response = await authService.singInWithPasswordAndEmail<SignInResponse>(arg)

    return response
  },
)

export const sighInByToken = createAsyncThunk<SignInResponse, { token: string }>(
  `${SLICE_NAME}/sighInByToken`,
  async (arg, thunkAPI) => {
    const response = await authService.signInWithToken<SignInResponse>(arg)
    return response
  },
)

export const singUp = createAsyncThunk<SignInResponse, SighUpPayload>(
  `${SLICE_NAME}/signUp`,
  async (arg, thunkAPI) => {
    const response = await authService.signUpWithPasswordAndEmail<SignInResponse>(arg)
    return response
  },
)

export const fetchUser = createAsyncThunk(`${SLICE_NAME}/fetchUser`, async (arg, thunkAPI) => {})

export const fetchBalance = createAsyncThunk(
  `${SLICE_NAME}/fetchBalance`,
  async (arg, thunkAPI) => {
    const response = await userService.fetchBalance<{ balance: number }>()

    return response.balance
  },
)

export const fetchStatistic = createAsyncThunk<Statistic[]>(
  `${SLICE_NAME}/fetchStatistic`,
  async (arg, thunkAPI) => {
    const response = await userService.fetchStatistic<{ statistic: Statistic[] }>()
    return response.statistic
  },
)

export const fetchReferrals = createAsyncThunk<Referral[]>(
  `${SLICE_NAME}/fetchReferrals`,
  async (arg, thunkAPI) => {
    const response = await referralsService.getAllReferrals<{ referrals: Referral[] }>()

    return response.referrals
  },
)

export const fetchReferralsStatistic = createAsyncThunk<ReferralStatistic[]>(
  `${SLICE_NAME}/fetchReferralsStatistic`,
  async (arg, thunkAPI) => {

    const response = await referralsService.getReferralsStatistic<{ referralsStatistic: ReferralStatistic[] }>()

    return response.referralsStatistic
  },
)

export const retrieved = createAsyncThunk<void, { id: number }>(
  `${SLICE_NAME}/retrieved`,
  async (arg, thunkAPI) => {
    const dispatch = thunkAPI.dispatch
    await referralsService.getRetrieved(arg.id)
    dispatch(fetchStatistic())
    dispatch(fetchReferrals())
    dispatch(fetchReferralsStatistic())
    dispatch(fetchBalance())
  }
)

export const retrievedAll = createAsyncThunk<void>(
  `${SLICE_NAME}/retrievedAll`,
  async (arg, thunkAPI) => {
    const dispatch = thunkAPI.dispatch
    await referralsService.getRetrievedAll()
    dispatch(fetchStatistic())
    dispatch(fetchReferrals())
    dispatch(fetchReferralsStatistic())
    dispatch(fetchBalance())
  }
)


export const getReferrals = (state: RootState) => state.user.referrals
export const getReferralsStatistic = (state: RootState) => state.user.referralsStatistic
export const getToken = (state: RootState) => state.user.token
export const getBalance = (state: RootState) => state.user.balance
export const getStatistic = (state: RootState) => state.user.statistic
export const getUser = (state: RootState) => state.user
export const getRoles = (state: RootState) => state.user.roles

export const { startFetching, endFetching, logoutUser } = userSlice.actions

export default userSlice.reducer
