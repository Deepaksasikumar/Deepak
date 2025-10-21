import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import feedbackReducer from './feedbackSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    feedback: feedbackReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
