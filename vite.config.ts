import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},
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
		rollupOptions: {}
	}
});
