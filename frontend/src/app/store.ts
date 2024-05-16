import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from '../services/';

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

export default store;