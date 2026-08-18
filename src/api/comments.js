import { request } from './client.js';

export function getCommentsByPostId(postId) {
  const params = new URLSearchParams({ postId: String(postId) });

  return request(`/comments?${params.toString()}`);
}

export function createComment(comment) {
  return request('/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
  });
}

export function deleteComment(commentId) {
  return request(`/comments/${commentId}`, {
    method: 'DELETE',
  });
}
