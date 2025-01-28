import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: true,
		watch: {
			usePolling: true,
			interval: 500,
			binaryInterval: 1000
		}
	},
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: ['fs']
		}
	}
});
