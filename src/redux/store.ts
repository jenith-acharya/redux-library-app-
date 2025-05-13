import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './reducer';

const store = configureStore({
  reducer: libraryReducer, 
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
