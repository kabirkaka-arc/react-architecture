import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../../features/dashboard/store';
export const store: any = configureStore({
  reducer: {
    // our reducers goes here
    employeeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
