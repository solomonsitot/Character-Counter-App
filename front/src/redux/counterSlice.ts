import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  text: string;
  excludeSpaces: boolean;
  characterLimit: number;
  isCharacterLimitSet: boolean;
}

const initialState: CounterState = {
  text: "",
  excludeSpaces: false,
  characterLimit: 200,
  isCharacterLimitSet: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    toggleExcludeSpaces: (state) => {
      state.excludeSpaces = !state.excludeSpaces;
    },
    toggleCharacterLimit: (state) => {
      state.isCharacterLimitSet = !state.isCharacterLimitSet;
    },
    setCharacterLimit: (state, action: PayloadAction<number>) => {
      state.characterLimit = action.payload;
    },
  },
});

export const { setText, toggleExcludeSpaces, toggleCharacterLimit, setCharacterLimit } =
  counterSlice.actions;
export default counterSlice.reducer;
