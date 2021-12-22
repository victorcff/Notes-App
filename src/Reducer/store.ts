import { configureStore } from '@reduxjs/toolkit'
import notePickerReducer from '../Features/notePickerSlice'
import notesDirectoryReducer from '../Features/notesDirectorySlice'

export const store = configureStore({
  reducer: {
    notePicker: notePickerReducer,
    notesDirectory: notesDirectoryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch