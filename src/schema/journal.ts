import graphql from 'graphql';
import { user } from './users';
import { directory } from './shared';

export const journalState = (() => {
	const Directory = directory;
	directory.name = 'JournalState';
	return Directory;
})();

export const journalNote = new graphql.GraphQLObjectType({
	name: 'JournalNote',
	fields: {
		id: { type: graphql.GraphQLInt },
		user: { type: user },
		state: { type: journalState },
		created: { type: graphql.GraphQLInt },
	},
});

export const journalStates = new graphql.GraphQLObjectType({
	name: 'JournalStates',
	fields: {
		journalStates: { type: new graphql.GraphQLList(journalState) },
	},
});

export const journal = new graphql.GraphQLObjectType({
	name: 'Journal',
	fields: {
		journalNotes: { type: new graphql.GraphQLList(journalNote) },
	},
});
