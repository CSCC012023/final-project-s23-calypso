// store.js or store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Other middleware or configuration options can be added here.
});

export default store;
