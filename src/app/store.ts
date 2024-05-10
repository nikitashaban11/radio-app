import { configureStore } from '@reduxjs/toolkit';
import { stationApi } from '../services/station';

export const store = configureStore({
  reducer: {
    [stationApi.reducerPath]: stationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
