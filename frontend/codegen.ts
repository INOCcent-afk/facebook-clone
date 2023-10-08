import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://localhost:4000/api/",
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"./src/gql/": {
			documents: ["src/**/*.tsx"],
			preset: "client",
		},
	},
};

export default config;
