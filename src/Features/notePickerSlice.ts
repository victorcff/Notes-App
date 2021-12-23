import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface INotes {
  id: number,
  title: string,
  note: string,
}

const initialState = {
  noteId: 0,
  noteTitle: '',
  noteContent: '',
  notes: [] as INotes[],
}

export const notePickerSlice = createSlice({
  name: 'notePicker',
  initialState,
  reducers: {
    idPicker: (state) => {
      state.noteId++
    },
    getId: (state, action: PayloadAction<number>) => {
      state.noteId = action.payload
    },
    titlePicker: (state, action: PayloadAction<string>) => {
      state.noteTitle = action.payload
    },
    notePicker: (state, action: PayloadAction<string>) => {
      state.noteContent = action.payload
    },
    addNote: (state) => {
      state.notes = [
        ...state.notes,
        {
          id: state.noteId,
          title: state.noteTitle,
          note: state.noteContent,
        }
      ]
    },
    updateNote: (state, action: PayloadAction<number>) => {
      state.notes[action.payload - 1].title = state.noteTitle
      state.notes[action.payload - 1].note = state.noteContent
    },
  }
})

export const { getId, updateNote, addNote, idPicker, titlePicker, notePicker } = notePickerSlice.actions
export default notePickerSlice.reducer