
   <script lang="ts">
    import { onMount } from 'svelte';
    import { posts, fetchPosts, users, fetchUsers } from '../store';
    import { get } from 'svelte/store';
    import type { Post, User } from '../types'
    import '../app.css';
  
    let postList: Post [];
    let userList: User [] ;

  
    onMount(async() => {
      
     await fetchPosts();
     await fetchUsers();
    


     console.log(get(posts));
     console.log(get(users));
  

  });

  postList = get(posts) as Post[];
  userList = get(users) as User[];

  const fetchData = async () => {
    await fetchPosts();
    await fetchUsers();

    postList = get(posts) as Post[];
    userList = get(users) as User[];
  };
    
  
    const getUserName = (userId: number): string => {
      const user = userList.find(user => user.id === userId);
      return user ? user.name : 'Unknown';
    };
  </script>
  
  <svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
  </svelte:head>
  
  <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100  p-4">
    <h1 class="text-3xl font-bold mb-8">Home Page</h1>

    <button on:click={fetchData} class="mb-8 px-4 py-2 bg-black text-white rounded" >Load Data</button>

    <ul class="w-full max-w-xl">
      {#each postList as post}
        <li class="mb-6 p-4 bg-white rounded shadow">
          <a href={`/post/${post.id}`}>

            <h2 class="text-xl font-semibold">{post.title}</h2>
            <p class="mt-2">{post.body}</p>
            <p class="mt-4 text-gray-600">By: {getUserName(post.userId)}</p>
          </a>
        </li>
      {/each}
    </ul>

  </main>
  