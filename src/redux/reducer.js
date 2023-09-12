import { combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';

import { contactsApi } from './contactsApi';

const rootReducer = combineReducers({

  filter: filtersReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export default rootReducer;
