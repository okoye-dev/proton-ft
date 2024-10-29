import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  activeChat: number;
}

const initialState: ChatState = {
  activeChat: 0,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<number>) => {
      state.activeChat = action.payload;
    },
  },
});

export const { setActiveChat } = chatSlice.actions;
export default chatSlice.reducer;
