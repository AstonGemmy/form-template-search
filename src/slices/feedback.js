import { createSlice } from "@reduxjs/toolkit";

export const prepareFeedback = (message, type, target) => (dispatch, getState) => {
  const feedbackObject = setFeedbackObject(message, type)
  dispatch(setFeedback({ target, feedback: feedbackObject }))
}

export const setFeedbackObject = (message, type) => ({ message, type })

const initialState = {};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFeedback: (state, action) => {
      state[action.payload.target] = action.payload.feedback
    },
    clearFeedback: () => ({})
  },
});

const { reducer, actions } = feedbackSlice;
export const { setFeedback, clearFeedback } = actions
export default reducer;