import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import svg from '@poppanator/sveltekit-svg';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import './src/variables.scss';`
			},
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		prerender: { default: true },
		paths: {
			base: '/charity'
		  },
		vite: {
			build: { assetsInlineLimit: 50000 },
			plugins: [
				imagetools({ force: true }),
				svg({
					includePaths: ['./src/lib/black-icons/'],
					svgoOptions: {
						multipass: true,
						plugins: [
							{
								name: 'preset-default',
								// by default svgo removes the viewBox which prevents svg icons from scaling
								// not a good idea! https://github.com/svg/svgo/pull/1461
								params: { overrides: { removeViewBox: false } }
							},
							{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
						]
					}
				}),
				svg({
					svgoOptions: {
						multipass: true,
						plugins: [
							{
								name: 'preset-default',
								// by default svgo removes the viewBox which prevents svg icons from scaling
								// not a good idea! https://github.com/svg/svgo/pull/1461
								params: {
									overrides: {
										removeViewBox: false,
										cleanupIDs: false,
										cleanupNumericValues: false
									}
								}
							}
						]
					}
				})
			]
		}
	}
};

export default config;
