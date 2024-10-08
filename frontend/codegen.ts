import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://localhost:4000/graphql/",
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"./src/graphql/generated/": {
			documents: ["src/**/*.tsx", "src/**/*.ts"],
			preset: "client",
		},
	},
};

export default config;
