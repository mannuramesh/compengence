
import { writable } from 'svelte/store';
import type { Post, User, Comment } from './types';



export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  posts.set(data);
};

export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  users.set(data);
};

export const fetchPostComments = async (postId: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  const data = await response.json();
  comments.set(data);
};


export const posts = writable<Post[]>([]);
export const users = writable<User[]>([]);
export const comments = writable<Comment[]>([]);


