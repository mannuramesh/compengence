  <svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
  </svelte:head>

  <script lang="ts">
    import { onMount } from 'svelte';
    import { getContext } from 'svelte';
    import { writable } from 'svelte/store';
    import type { Post, User, Comment } from '../../types';

    const params = getContext('params') as { id: string };
    let postId: number = +params.id;
    let post = writable<Post | null>(null);
    let user = writable<User | null>(null);
    let postComments = writable<Comment[]>([]);

    onMount(async () => {
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postRes.json();
        post.set(postData);

        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        const userData = await userRes.json();
        user.set(userData);

        const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const commentsData = await commentsRes.json();
        postComments.set(commentsData);
    });
</script>

<main class="p-4">
  {#if $post}
    <h1 class="text-2xl font-bold mb-4">{$post.title}</h1>
    <p>{$post.body}</p>
    {#if $user}
      <p class="text-sm text-gray-600 mt-4">By: {$user.name}</p>
    {/if}
    <h2 class="text-xl font-semibold mt-6">Comments</h2>
    <ul>
      {#if $postComments.length > 0}  {#each $postComments as comment}
          <li class="mb-4 p-4 border-b">
            <h3 class="font-semibold">{comment.name}</h3>
            <p>{comment.body}</p>
            <p class="text-sm text-gray-600">By: {comment.email}</p>
          </li>
        {/each}
      {:else}
        <p>No comments found.</p>
      {/if}
    </ul>
  {:else}
    <p>No post found with ID: {postId}</p>
  {/if}
</main>

<main class="p-4">
    {#if $post}
        <h1 class="text-2xl font-bold mb-4">{$post.title}</h1>
        <p>{$post.body}</p>
        {#if $user}
            <p class="text-sm text-gray-600 mt-4">By: {$user.name}</p>
        {/if}
        <h2 class="text-xl font-semibold mt-6">Comments</h2>
        <ul>
            {#each $postComments as comment}
                <li class="mb-4 p-4 border-b">
                    <h3 class="font-semibold">{comment.name}</h3>
                    <p>{comment.body}</p>
                    <p class="text-sm text-gray-600">By: {comment.email}</p>
                </li>
            {/each}
        </ul>
    {/if}
</main>
