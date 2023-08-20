import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { prefetch } from './prefetch-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(), prefetch()]
});
