import { getCommentsByPostId, getLimitedPosts } from '@app/api';
import { convertArrayToRecord } from '@app/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

enum Thunk {
    GetPosts = 'posts/getPosts',
    GetComments = 'posts/getComments'
}

export const getPostsThunk = createAsyncThunk(Thunk.GetPosts, async (start: number) => convertArrayToRecord(await getLimitedPosts(start)));
export const getCommentsThunk = createAsyncThunk(Thunk.GetComments, async (postId: number) => getCommentsByPostId(postId));
