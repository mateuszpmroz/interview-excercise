import { API_URL, COMMENTS, Params, POSTS, POSTS_LIMIT } from '@app/consts';
import { get } from '@app/services';
import { Comment, Post } from '@app/types';

const createPostsLink = (start: number, limit: number) => `${API_URL}/${POSTS}?${Params.Start}=${start}&${Params.Limit}=${limit}`;
const createCommentLink = (postId: number) => `${API_URL}/${COMMENTS}?${Params.PostId}=${postId}`;

export const getLimitedPosts = (start = 0): Promise<Post[]> => get(createPostsLink(start, POSTS_LIMIT));
export const getCommentsByPostId = (postId: number): Promise<Comment[]> => get(createCommentLink(postId));
