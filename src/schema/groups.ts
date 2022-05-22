import graphql from 'graphql';

export const group = new graphql.GraphQLObjectType({
	name: 'Group',
	fields: {
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString },
		created: { type: graphql.GraphQLInt },
	},
});

export const groups = new graphql.GraphQLObjectType({
	name: 'Groups',
	fields: {
		groups: { type: new graphql.GraphQLList(group) },
	},
});
