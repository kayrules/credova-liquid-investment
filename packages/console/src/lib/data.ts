// NOTE: This is where you could wire up your own data providers:
// GraphQL, Databases, REST APIs, CDNs, proxies, S3, Matrix, IPFS, you name it…

import { API_URL, REMOTE_ASSETS_BASE_URL } from '../app/constants.js';
import type { Endpoint, EndpointsToOperations } from '../types/entities.js';
import { getProducts } from '../services/products.js';
import { getUsers } from '../services/users.js';

export async function fetchData<Selected extends Endpoint>(endpoint: Selected) {
	// During build time or when API is not available, use static data
	if (import.meta.env.SSR || typeof window === 'undefined') {
		console.info(`Using static data for ${endpoint}…`);
		if (endpoint === 'products') {
			return getProducts() as unknown as Promise<ReturnType<EndpointsToOperations[Selected]>>;
		}
		if (endpoint === 'users') {
			return getUsers() as unknown as Promise<ReturnType<EndpointsToOperations[Selected]>>;
		}
	}

	const apiEndpoint = `${API_URL}${endpoint}`;

	console.info(`Fetching ${apiEndpoint}…`);
	return fetch(apiEndpoint)
		.then(
			(r) =>
				r.json() as unknown as Promise<
					ReturnType<EndpointsToOperations[Selected]>
				>,
		)
		.catch((e) => {
			console.error(e);
			// Fallback to static data on error
			console.info(`Falling back to static data for ${endpoint}…`);
			if (endpoint === 'products') {
				return getProducts() as unknown as ReturnType<EndpointsToOperations[Selected]>;
			}
			if (endpoint === 'users') {
				return getUsers() as unknown as ReturnType<EndpointsToOperations[Selected]>;
			}
			throw Error('Invalid API data!');
		});
}

// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}
