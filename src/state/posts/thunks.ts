import { getCommentsByPostId, getLimitedPosts } from '@app/api';
import { convertArrayToObject } from '@app/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

enum Thunk {
    GetPosts = 'posts/getPosts',
    GetComments = 'posts/getComments'
}

export const getPostsThunk = createAsyncThunk(Thunk.GetPosts, async (start: number) => convertArrayToObject(await getLimitedPosts(start)));
export const getCommentsThunk = createAsyncThunk(Thunk.GetComments, async (postId: number) => getCommentsByPostId(postId));
