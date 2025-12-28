import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ProfileState {
  account: { id: number; name: string; email: string; image: string } | null;
  addtocard: 0;
}

const initialState: ProfileState = {
  account: null,
  addtocard: 0,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<ProfileState["account"]>) => {
      state.account = action.payload;
    },
    removeAccount: (state) => {
      state.account = null;
      state.addtocard = 0;
    },
    incrementCard: (
      state,
      action: PayloadAction<ProfileState["addtocard"]>
    ) => {
      state.addtocard += action.payload;
    },
    decrementCard: (
      state,
      action: PayloadAction<Partial<ProfileState["addtocard"]>>
    ) => {
      state.addtocard -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount, removeAccount, incrementCard } =
  profileSlice.actions;

export default profileSlice.reducer;

// Selector function to be used with useSelector in components
export const selectAccount = (state: RootState) => state.profile.account;
export const selectCard = (state: RootState) => state.profile.addtocard;
