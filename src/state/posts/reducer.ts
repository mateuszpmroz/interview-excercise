import { createSlice } from '@reduxjs/toolkit';
import { Post } from '@app/types';
import { NAME } from './consts';
import { getCommentsThunk, getPostsThunk } from './thunks';
import { POSTS_LIMIT, START_INDEX } from '@app/consts';

export interface PostsState {
    posts: Record<string, Post>;
    isLoading: boolean;
    error: string;
    startIndex: number;
    isLastPostLoaded: boolean;
}

const errorMessage = 'Error occured';

const initialState = {
  posts: {},
  isLoading: false,
  error: '',
  startIndex: START_INDEX,
  isLastPostLoaded: false,
} as PostsState;

export const postsSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.isLastPostLoaded = true;
      }
      state.isLoading = false;
      state.posts = {
        ...state.posts,
        ...payload,
      };
      state.startIndex = state.startIndex + POSTS_LIMIT;
    });
    builder.addCase(getPostsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || errorMessage;
    });
    builder.addCase(getCommentsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCommentsThunk.fulfilled, (state, { payload }) => {
      const postId = payload[0].postId;
      state.isLoading = false;
      state.posts = {
        ...state.posts,
        [postId]: { ...state.posts[postId], comments: payload }
      };
    });
    builder.addCase(getCommentsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || errorMessage;
    });
  }
});
