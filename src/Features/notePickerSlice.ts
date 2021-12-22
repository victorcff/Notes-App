import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  noteId: 0,
  noteTitle: '',
  noteContent: '',
}

export const notePickerSlice = createSlice({
  name: 'notePicker',
  initialState,
  reducers: {
    idPicker: (state) => {
      state.noteId++
    },
    titlePicker: (state, action: PayloadAction<string>) => {
      state.noteTitle = action.payload
    },
    notePicker: (state, action: PayloadAction<string>) => {
      state.noteContent = action.payload
    }
  }
})

export const { idPicker, titlePicker, notePicker } = notePickerSlice.actions
export default notePickerSlice.reducer