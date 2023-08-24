import { configureStore } from '@reduxjs/toolkit';
import hamburgerReducer from './features/hamburger/hamburgerSlice';

export default configureStore({
  reducer: {
    hamburger: hamburgerReducer,
  },
});
