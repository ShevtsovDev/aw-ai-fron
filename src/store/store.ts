import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import schemaSlice from 'src/store/slices/schemaSlice/schemaSlice'
import userSlice from 'src/store/slices/userSlice/userSlice'
import adminSlice from 'src/store/slices/adminSlise/adminSlise'
import globalSlise from 'src/store/slices/globalSlise/globalSlise'


export const store = configureStore({
  reducer: {
    schemas: schemaSlice,
    user: userSlice,
    admin: adminSlice,
    global: globalSlise
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector