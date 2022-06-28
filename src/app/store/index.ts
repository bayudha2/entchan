import type { ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import type { Action } from 'redux';

import profileReducer from './slices/profile';
import threadReducer from './slices/thread';

// export const makeStore = () =>
//   configureStore({
//     reducer: {
//       profile: profileReducer,
//       thread: threadReducer,
//     },
//     devTools: true,
//   });

// eslint-disable-next-line import/no-mutable-exports
let store: ReturnType<typeof configStore>;

const configStore = () =>
  configureStore({
    reducer: {
      profile: profileReducer,
      thread: threadReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

export const makeStore = () => {
  store = configStore();
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export { store };
export const wrapper = createWrapper<AppStore>(makeStore);
