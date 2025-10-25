import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

const DEV_PORT = 3000;

// https://astro.build/config
export default defineConfig({
	site: `http://localhost:${DEV_PORT}`,

	// output: 'server',

	server: {
		port: DEV_PORT,
	},

	integrations: [
		sitemap(),
		tailwind(),
		react(),
	],
});
