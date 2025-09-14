import { InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { SERVER_URL } from './constants/url.constants';
// @ts-ignore
import UploadHttpLink from 'apollo-upload-client/UploadHttpLink.mjs';

const httpLink = new UploadHttpLink({
	// todo: Перенести в .env
	uri: SERVER_URL,
	credentials: 'include',
	headers: {
		'apollo-require-preflight': 'true',
	},
});

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
