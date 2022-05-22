import graphql from 'graphql';

const directoryFields = {
	id: { type: graphql.GraphQLInt },
	name: { type: graphql.GraphQLString },
	description: { type: graphql.GraphQLString },
	created: { type: graphql.GraphQLInt },
};

export const directory = new graphql.GraphQLObjectType({
	name: 'Directory',
	fields: directoryFields,
});

export const directoryWithShortname = new graphql.GraphQLObjectType({
	name: 'Directory',
	fields: {
		...directoryFields,
		shortname: { type: graphql.GraphQLString },
	},
});
