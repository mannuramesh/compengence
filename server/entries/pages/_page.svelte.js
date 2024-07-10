import { c as create_ssr_component, g as get_store_value, b as each, d as add_attribute, e as escape } from "../../chunks/ssr.js";
import { p as posts, u as users } from "../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let postList;
  let userList;
  postList = get_store_value(posts);
  userList = get_store_value(users);
  const getUserName = (userId) => {
    const user = userList.find((user2) => user2.id === userId);
    return user ? user.name : "Unknown";
  };
  return `${$$result.head += `<!-- HEAD_svelte-1bol6d9_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1bol6d9_END -->`, ""} <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"><h1 class="text-3xl font-bold mb-8" data-svelte-h="svelte-x1i9t">Home Page</h1> <button class="mb-8 px-4 py-2 bg-black text-white rounded" data-svelte-h="svelte-1dzdnwz">Load Data</button> <ul class="w-full max-w-xl">${each(postList, (post) => {
    return `<li class="mb-6 p-4 bg-white rounded shadow"><a${add_attribute("href", `/post/${post.id}`, 0)}><h2 class="text-xl font-semibold">${escape(post.title)}</h2> <p class="mt-2">${escape(post.body)}</p> <p class="mt-4 text-gray-600">By: ${escape(getUserName(post.userId))}</p></a> </li>`;
  })}</ul></main>`;
});
export {
  Page as default
};
