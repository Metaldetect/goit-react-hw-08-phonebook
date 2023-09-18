// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
// };

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: builder => {
//     builder.addCase(addContact, (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//     });
//     builder.addCase(deleteContact, (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     });
//   },
// });

// export const { addContact, deleteContact } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
