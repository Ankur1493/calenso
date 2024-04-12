import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authSliceReducer from "./slices/authSlice";
import isClickedReducer from "./slices/isClickedSlice";
import meetingSliceReducer from "./slices/meetingSlice";
import bookingSliceReducer from "./slices/bookingSlice";
import { bookingApiSlice } from "./slices/bookingApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    isClicked: isClickedReducer,
    meetings: meetingSliceReducer,
    bookings: bookingSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      bookingApiSlice.middleware
    ),
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
