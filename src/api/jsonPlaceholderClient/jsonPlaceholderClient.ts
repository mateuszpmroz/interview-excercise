import { API_URL, COMMENTS, Params, POSTS, POSTS_LIMIT, START_INDEX } from '@app/consts';
import { apiService } from '@app/services';
import { Comment, Post } from '@app/types';

const POSTS_LINK = `${API_URL}/${POSTS}`;
const COMMENTS_LINK = `${API_URL}/${COMMENTS}`;

const getPostsParams = (start: number, limit: number) => ({
  [Params.Start]: start,
  [Params.Limit]: limit,
});

const getCommentsParams = (postId: number) => ({
  [Params.PostId]: postId,
});

export const getLimitedPosts = (start = START_INDEX): Promise<Post[]> => apiService.get(POSTS_LINK, { params: getPostsParams(start, POSTS_LIMIT) });
export const getCommentsByPostId = (postId: number): Promise<Comment[]> => apiService.get(COMMENTS_LINK, { params: getCommentsParams(postId) });
