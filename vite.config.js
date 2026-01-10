import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
    server: {
        https: true, // Enable HTTPS in the server options
        proxy: {},
    },
	plugins: [sveltekit(), mkcert()]
});
