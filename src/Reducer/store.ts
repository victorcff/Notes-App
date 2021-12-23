import { configureStore } from '@reduxjs/toolkit'
import notePickerReducer from '../Features/notePickerSlice'

export const store = configureStore({
  reducer: {
    notePicker: notePickerReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch