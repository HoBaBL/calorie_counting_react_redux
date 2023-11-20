import { configureStore } from '@reduxjs/toolkit'
import UserSlice  from './slices/UserSlice'
import CalloriasAll from './slices/CalloriasAll'
import CalloriasSum from './slices/CalloriasSum'


export const store = configureStore({
    reducer: { UserSlice, CalloriasAll, CalloriasSum},
  })