import { combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';

import { contactsApi } from './contactsApi';
// import { contactsReducer } from './contactSlice';

const rootReducer = combineReducers({
  filter: filtersReducer,
  // contacts: contactsReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export default rootReducer;
