import graphql from 'graphql';

export const device = new graphql.GraphQLObjectType({
	name: 'Device',
	fields: {
		id: { type: graphql.GraphQLString },
		name: { type: graphql.GraphQLString },
		browser: { type: graphql.GraphQLString },
		version: { type: graphql.GraphQLString },
		os: { type: graphql.GraphQLString },
		ua: { type: graphql.GraphQLString },
		created: { type: graphql.GraphQLInt },
	},
});

export const devices = new graphql.GraphQLObjectType({
	name: 'Devices',
	fields: {
		devices: { type: new graphql.GraphQLList(device) },
	},
});
