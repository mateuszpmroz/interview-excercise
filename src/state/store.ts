import { configureStore } from '@reduxjs/toolkit';
import { reducer as postsReducer, consts as postsConsts } from './posts';

export const store = configureStore({
  reducer: {
    [postsConsts.NAME]: postsReducer.postsSlice.reducer,
  },
});

export interface ApplicationState {
  [postsConsts.NAME]: postsReducer.PostsState;
}
