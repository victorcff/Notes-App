// import { createSlice } from '@reduxjs/toolkit'
// import { useAppSelector } from '../hooks'

// interface INotes {
//   id: number,
//   title: string,
//   note: string,
// }

// const initialState = [] as INotes[]

// export const notesDirectorySlice = createSlice({
//   name: 'notesDirectory',
//   initialState,
//   reducers: {
//     addNote: (state) => {
//       return [
//         ...state,
//         {
//           id: useAppSelector(state => state.notePicker.noteId),
//           title: useAppSelector(state => state.notePicker.noteTitle),
//           note: useAppSelector(state => state.notePicker.noteContent),
//         }
//       ]
//     }
//   }
// })

// export const { addNote } = notesDirectorySlice.actions
// export default notesDirectorySlice.reducer