import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_BACKEND_URL,
	documents: ['./src/graphql/**/*.graphql'],
	generates: {
		'./src/graphql/gql/': {
			preset: 'client-preset',
		},
		// './src/graphql/generated/output.ts': {
		// 	plugins: [
		// 		'typescript',
		// 		'typescript-operations',
		// 		'typescript-react-apollo'
		// 	],
		// },
	},
	ignoreNoDocuments: true,
};

export default config;
