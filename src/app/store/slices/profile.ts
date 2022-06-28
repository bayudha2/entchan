import { createSlice } from '@reduxjs/toolkit';
import type { WritableDraft } from 'immer/dist/internal';
import { HYDRATE } from 'next-redux-wrapper';

import type { AppState } from '..';

export const ProfileSlice = createSlice({
  name: 'profile',

  initialState: {
    name: null,
  },

  reducers: {
    setProfileData: (state, action) => {
      state.name = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action): void | WritableDraft<any> => {
      if (!action.payload.profile.name) {
        return state;
      }

      state.name = action.payload.profile.name;
      return state;
    },
  },
});

export const { setProfileData } = ProfileSlice.actions;
export const selectProfile = (state: AppState) => state.profile;
export default ProfileSlice.reducer;
