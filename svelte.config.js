import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    prerender: {
      default: true
    },

    adapter: adapter({
      fallback: index.html
    }),
    
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/ml-psych' : '',
    },
  }
};

export default config;
