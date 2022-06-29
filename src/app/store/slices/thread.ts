import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AppState } from '..';

type StateType = {
  isShown: boolean;
  threadData: any;
  isLoading: boolean;
  displayedThread: string[];
};

const initialState: StateType = {
  isShown: false,
  threadData: {},
  isLoading: true,
  displayedThread: [],
};

export const getThreadDetail = createAsyncThunk(
  'thread/getThreadDetail',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('https://catfact.ninja/fact');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const ThreadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    setShown: (state, action) => {
      state.isShown = action.payload.payload;
    },
    setDisplayThread: (state, action) => {
      state.displayedThread = action.payload;
    },
    hideDisplayThread: (state, action) => {
      state.displayedThread.push(action.payload);
    },
    unhideDisplayThread: (state, action) => {
      const idx = state.displayedThread.findIndex(
        (data) => data === action.payload
      );
      if (idx > -1) state.displayedThread.splice(idx, 1);
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(
    //   HYDRATE,
    //   (state, action: any): void | WritableDraft<any> => {
    //     if (!action.payload.thread.isShown) {
    //       return state;
    //     }
    //     state.isShown = action.payload.thread.isShown;
    //     return state;
    //   }
    // );
    builder.addCase(getThreadDetail.fulfilled, (state: StateType, action) => {
      state.isLoading = false;
      state.threadData = action.payload;
    });
  },
});

export const {
  setShown,
  hideDisplayThread,
  setDisplayThread,
  unhideDisplayThread,
} = ThreadSlice.actions;
export const selectThread = (state: AppState) => state.thread;
export default ThreadSlice.reducer;
