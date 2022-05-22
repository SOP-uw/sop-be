import graphql from 'graphql';
import { session } from './sessions';
import { directory } from './shared';

export const logAction = (() => {
	const Directory = directory;
	directory.name = 'LogAction';
	return Directory;
})();

export const log = new graphql.GraphQLObjectType({
	name: 'Log',
	fields: {
		id: { type: graphql.GraphQLInt },
		session: { type: session },
		action: { type: logAction },
		data: { type: graphql.GraphQLString },
		timestamp: { type: graphql.GraphQLInt },
	},
});

export const groups = new graphql.GraphQLObjectType({
	name: 'Logs',
	fields: {
		logs: { type: new graphql.GraphQLList(log) },
	},
});
