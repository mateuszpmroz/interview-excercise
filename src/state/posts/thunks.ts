import { getCommentsByPostId, getLimitedPosts } from '@app/api';
import { Post } from '@app/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

enum Thunk {
    GetPosts = 'posts/getPosts',
    GetComments = 'posts/getComments'
}

const convertPostMapToObject = (posts: Post[]) => {
  const object: Record<string, Post> = {};

  posts.forEach(post => object[post.id] = post);

  return object;
};

export const getPostsThunk = createAsyncThunk(Thunk.GetPosts, async (start: number) => convertPostMapToObject(await getLimitedPosts(start)));
export const getCommentsThunk = createAsyncThunk(Thunk.GetComments, async (postId: number) => getCommentsByPostId(postId));
