import graphql from 'graphql';
import { user } from './users';
import { device } from './devices';

export const session = new graphql.GraphQLObjectType({
	name: 'Session',
	fields: {
		id: { type: graphql.GraphQLString },
		user: { type: user },
		device: { type: device },
		lastActive: { type: graphql.GraphQLInt },
	},
});

export const sessions = new graphql.GraphQLObjectType({
	name: 'Sessions',
	fields: {
		sessions: { type: graphql.GraphQLList(session) },
	},
});
