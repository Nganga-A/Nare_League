import { configureStore } from '@reduxjs/toolkit'
import competitionsReducer from './../features/counter/competitionSlice.js';
import allSportsReducer from './../features/counter/allSportsSlice.js'

export default configureStore({
  reducer: {
    competitions: competitionsReducer,
    allSports:allSportsReducer,
  }
})