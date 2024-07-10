<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import { posts, users, comments, fetchPostComments } from '../../../store';
    import { get } from 'svelte/store';
    import type { Post, User, Comment } from '../../../types'
    import { goto } from '$app/navigation';

    let postId : string;
    let post: Post | null = null;
    let user: User | null = null;
    let postComments: Comment[] = [];

    $: postId = (get(page) as { params: { id: string } }).params.id;
  
    onMount(async() => {


    const allPosts = get(posts) as Post[];
    post = allPosts.find(p => p.id === parseInt(postId)) || null;


    if (post !== null) {
    const allUsers = get(users) as User[];
    user = allUsers.find(u => u.id === post?.userId) ?? null;
    }


    fetchPostComments(parseInt(postId));
    });
    $: postComments = get(comments) as Comment[];

    const goToHomePage = () => {
    goto('/');
     };

    </script>

    <svelte:head>
    <title>{post ? post.title : 'Loading...'}</title>
    <meta name="description" content="Post details page" />
    </svelte:head>

    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100  p-4">
    {#if post}

    <h1 class="text-2xl font-bold mb-4">{post.title}</h1>
    <p>{post.body}</p>

    {#if user}
      <p class="text-sm text-gray-600 mt-4">By: {user.name}</p>

    {/if}
    <h2 class="text-xl font-semibold mt-6">Comments</h2>

    <ul>

      {#if comments}
      {#each postComments as comment}
        <li class="mb-4 p-4 border-b">
          <h3 class="font-semibold">{comment.name}</h3>
          <p>{comment.body}</p>
          <p class="text-sm text-gray-600">By: {comment.email}</p>
        </li>
      {/each}
      {:else}
      <li class="mb-4 p-4 border-b">
        <h3 class="font-semibold">No Comments</h3>

        <p class="text-sm text-gray-600">By: No User</p>
      </li>{/if}
    </ul>

    {:else}

    <button on:click={goToHomePage} class="mb-8 px-4 py-2 bg-black text-white rounded">Go to Home Page to Load</button>

    {/if}

    </main>