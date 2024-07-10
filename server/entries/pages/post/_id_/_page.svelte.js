import { c as create_ssr_component, g as get_store_value, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { c as comments } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  get_store_value(page).params.id;
  get_store_value(comments);
  return `${$$result.head += `<!-- HEAD_svelte-1x3b8rt_START -->${$$result.title = `<title>${escape("Loading...")}</title>`, ""}<meta name="description" content="Post details page"><!-- HEAD_svelte-1x3b8rt_END -->`, ""} <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">${`<button class="mb-8 px-4 py-2 bg-black text-white rounded" data-svelte-h="svelte-1bnbvru">Go to Home Page to Load</button>`}</main>`;
});
export {
  Page as default
};
