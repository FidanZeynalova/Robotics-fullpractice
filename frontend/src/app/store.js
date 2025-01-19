import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { robotApi } from './Slices/robotSlices'

export const store = configureStore({
  reducer: {
    [robotApi.reducerPath]: robotApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(robotApi.middleware),
})

setupListeners(store.dispatch)