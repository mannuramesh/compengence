
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script lang="ts">
    import { onMount } from 'svelte';
    import { posts, users } from '../store';
    import type { Post, User } from '../types';
    import { get } from 'svelte/store';
  
    let allPosts: Post[] = [];
    let allUsers: User[] = [];
  
    onMount(async () => {
      const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
      allPosts = await postsRes.json();
      posts.set(allPosts);
  
      const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
      allUsers = await usersRes.json();
      users.set(allUsers);
    });
  
    $: postData = get(posts).map(post => ({
      ...post,
      user: get(users).find(user => user.id === post.userId)?.name
    }));
  </script>
  
  <main class="p-4">
    <h1 class="text-2xl font-bold mb-4">Posts</h1>
    <ul>
      {#each postData as { id, title, body, user }}
        <li class="mb-4 p-4 border-b">
          <a href={`#/post/${id}`}>
            <h2 class="text-xl font-semibold">{title}</h2>
            <p>{body}</p>
            <p class="text-sm text-gray-600">By: {user}</p>
          </a>
        </li>
      {/each}
    </ul>
  </main>
  