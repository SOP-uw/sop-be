import graphql from 'graphql';
import { group } from './groups';

export const user = new graphql.GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: graphql.GraphQLString },
		firstname: { type: graphql.GraphQLString },
		lastname: { type: graphql.GraphQLString },
		group: { type: group },
		permissions: { type: new graphql.GraphQLList(graphql.GraphQLString) },
		created: { type: graphql.GraphQLInt },
	},
});

export const users = new graphql.GraphQLObjectType({
	name: 'Users',
	fields: {
		users: { type: new graphql.GraphQLList(user) },
	},
});
