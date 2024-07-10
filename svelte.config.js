// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };
// import sveltePreprocess from 'svelte-preprocess';

// export default {
//   preprocess: sveltePreprocess(),
//   // other svelte options
// };
// // export default config;
// import adapter from '@sveltejs/adapter-auto';
// /** @type {import('@sveltejs/kit').Config} */const config = {	kit: {		adapter: adapter()	}};
// export default config;


// import adapter from '@sveltejs/adapter-auto';
// // import sveltePreprocess from 'svelte-preprocess';
// import { preprocess } from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter(),
//     alias: {
//       $components: 'src/components',
//       $lib: 'src/lib'
//     }
//   },
//   preprocess: preprocess({
//     postMessage:true
//   })
// };

// export default config;



import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

const config = {
  preprocess: sveltePreprocess({
    postcss: true
  }),
  kit: {
    adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
    alias: {
      $components: 'src/components',
      $lib: 'src/lib'
    }
  }
};

export default config;


