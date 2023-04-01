import { ApolloServer, gql } from "apollo-server";

const rootTypeDefs = gql`
	type Query {
		users: [User!]!
	}

	type User {
		id: ID!
		username: String!
		name: String!
		email: String!
	}
`;

const Query = {
	users: async () => {
		return [
			{
				id: 1,
				username: "dave noice",
				name: "inoc",
				email: "daveinoc@gmail.com",
			},
		];
	},
};

const server = new ApolloServer({
	typeDefs: rootTypeDefs,
	resolvers: { Query },
});

server.listen().then(({ url }) => {
	console.log(`Server ready on ${url}`);
});
