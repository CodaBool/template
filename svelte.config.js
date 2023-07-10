import adapter from '@sveltejs/adapter-vercel'
import { preprocessThrelte } from '@threlte/preprocess'

export default {
	kit: {
		adapter: adapter({
			// https://kit.svelte.dev/docs/adapter-vercel#deployment-configuration
		})
	},
	preprocess: preprocessThrelte()
}

// might require preprocessors here
// https://threlte.xyz/getting-started#installation