import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface FeedbackState {
  feedbacks: Feedback[];
  showSuccessModal: boolean;
}

const initialState: FeedbackState = {
  feedbacks: [],
  showSuccessModal: false
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedback: (state, action: PayloadAction<Omit<Feedback, 'id' | 'timestamp'>>) => {
      const newFeedback: Feedback = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      };
      state.feedbacks.push(newFeedback);
      state.showSuccessModal = true;
    },
    closeSuccessModal: (state) => {
      state.showSuccessModal = false;
    }
  }
});

export const { addFeedback, closeSuccessModal } = feedbackSlice.actions;
export default feedbackSlice.reducer;
