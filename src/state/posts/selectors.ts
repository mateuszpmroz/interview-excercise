import { Post } from '@app/types';
import { createSelector } from '@reduxjs/toolkit';
import { ApplicationState } from '../store';
import { PostsState } from './reducer';

const selectSelf = (state: ApplicationState) => state.posts;
export const posts = createSelector(selectSelf, (state) => state.posts);
export const isLoading = createSelector(selectSelf, (state) => state.isLoading);
export const startIndex = createSelector(selectSelf, (state) => state.startIndex);
export const isLastPostLoaded = createSelector(selectSelf, (state) => state.isLastPostLoaded);

export const postsArray = createSelector(selectSelf, (state) =>
  Object.values(state.posts),
);

export const postById = createSelector(
  posts,
  (_: PostsState, postId: number) => postId,
  (postsRecord: Record<string, Post>, postId: number) => postsRecord[postId],
);