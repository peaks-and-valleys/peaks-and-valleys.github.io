import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: true,
		watch: {
			usePolling: true,
			interval: 1000,
			binaryInterval: 1500
		}
	},
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: ['fs']
		}
	}
});
