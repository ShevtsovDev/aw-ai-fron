import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Doc, InitialDocsState } from 'src/store/slices/docsSlice/docsSlice.types'
import { docsService } from 'src/api/services/docsService/docsService'
import { RootState } from 'src/store/store'

const initialState: InitialDocsState = {
  docs: [],
  loading: true,
  saving: false,
  saved: true,
}

const SLICE_NAME = 'DOCS_SLICE'

export const adminSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startTyping: (state) => {
      state.saved = false
    }
  },
  extraReducers: builder =>
    builder.addCase(fetchDocs.fulfilled, (state, action) => {
      state.docs = action.payload
      state.loading = false
    })
      .addCase(fetchDocs.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchDocs.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchDocByUUID.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchDocByUUID.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(fetchDocByUUID.rejected, (state) => {
        state.loading = false
      })
      .addCase(saveDoc.pending, (state) => {
        state.saved = false
        state.saving = true
      })
      .addCase(saveDoc.fulfilled, (state) => {
        state.saved = true
        state.saving = false
      })
})

export const fetchDocs = createAsyncThunk<Doc[]>(
  `${SLICE_NAME}/fetchDocs`,
  async (arg, thunkAPI) => {
    const docs = await docsService.fetchDocs<{ docs: Doc[] }>()
    return docs.docs
  },
)

export const fetchDocByUUID = createAsyncThunk<Doc, { uuid: string }>(
  `${SLICE_NAME}/fetchDocByUUID`,
  async (arg, thunkAPI) => {
    const doc = await docsService.fetchDocByUUID<{ doc: Doc }>(arg.uuid)

    return doc.doc
  },
)

export const createDoc = createAsyncThunk<string, { content: string }>(
  `${SLICE_NAME}/createDoc`,
  async (arg, thunkAPI) => {
    const response = await docsService.createDoc(arg.content)
    return response.uuid
  },
)

export const saveDoc = createAsyncThunk<void, { content: string; uuid: string }>(
  `${SLICE_NAME}/saveDoc`,
  async (arg, thunkAPI) => {
    await docsService.saveDoc(arg.uuid, arg.content)
  },
)

export const getAllDocs = (state: RootState) => state.docs.docs
export const getDocsLoading = (state: RootState) => state.docs.loading
export const getDocsSaving = (state: RootState) => state.docs.saving
export const getDocsSaved = (state: RootState) => state.docs.saved

export const { startTyping } = adminSlice.actions

export default adminSlice.reducer
