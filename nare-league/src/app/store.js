import { configureStore } from '@reduxjs/toolkit'
import competitionsReducer from './../features/counter/competitionSlice.js';

export default configureStore({
  reducer: {
    competitions: competitionsReducer,
  }
})