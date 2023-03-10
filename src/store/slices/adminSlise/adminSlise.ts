import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, store } from 'src/store/store'
import { InitialAdminState } from 'src/store/slices/adminSlise/adminSlise.types'

const initialState: InitialAdminState = {
  schemas: [],
  loading: false,
  selectedSchema: null
}

const SLICE_NAME = 'ADMIN_SLICE'

export const adminSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
  },
})


const fetchUsers = createAsyncThunk(
  `${SLICE_NAME}/fetchUsers`,
  async (arg, thunkAPI) => {

  }
)


const fetchStatistic = createAsyncThunk(
  `${SLICE_NAME}/fetchStatistic`,
  async (arg, thunkAPI) => {

  }
)



export const { } = adminSlice.actions

export default adminSlice.reducer