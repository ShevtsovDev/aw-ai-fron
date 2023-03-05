import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchSchemas, InitialSchemaState } from 'src/store/slices/schemaSlice/schemaSlice.type'
import { schemaService } from 'src/api/services/schemaService/schemaService'
import { TemplateType } from 'src/components/modules/Templates/Template.types'
import { RootState, store } from 'src/store/store'

const initialState: InitialSchemaState = {
  schemas: [],
  loading: false,
  selectedSchema: null
}

const SLICE_NAME = 'SCHEMA_SLICE'

export const schemaSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startFetching: (state, action) => {
      state.loading = true
    },
    endFetching: (state, action) => {
      state.loading = false
    },
    setSelectedSchema: (state, action: PayloadAction<{ id: number }>) => {
      const schema = state.schemas.find(s => s.id === action.payload.id) ?? null
      state.selectedSchema = schema
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchSchemas.fulfilled, (state, action) => {
      state.schemas = action.payload.services
    })
  }
})

export const fetchSchemas = createAsyncThunk(
  `${SLICE_NAME}/fetchSchemas`,
  async (arg, { dispatch }) => {

    dispatch(startFetching({}))
    const schemas = await schemaService.fetchSchemas<FetchSchemas>()
    dispatch(endFetching({}))
    return schemas
  }
)

export const getSchemas = (store: RootState) => store.schemas.schemas

export const getSelectedSchema = (store: RootState) => {
  return store.schemas.selectedSchema
}

export const { startFetching, endFetching, setSelectedSchema } = schemaSlice.actions

export default schemaSlice.reducer