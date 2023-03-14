import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialGlobalState } from 'src/store/slices/globalSlise/globalSlise.types'
import { RootState } from 'src/store/store'

const initialState: InitialGlobalState = {
  globalLoading: true,
}

const SLICE_NAME = 'GLOBAL_SLICE'

export const globalSlise = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<{ status: boolean }>) => {
      state.globalLoading = action.payload.status
    }
  },
})


export const getGlobalLoading = (state: RootState) => state.global.globalLoading

export const { setGlobalLoading } = globalSlise.actions

export default globalSlise.reducer