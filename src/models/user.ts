import { Model } from 'objection';

export class User extends Model {
	static get tableName() {
		return 'users';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id: { type: 'string', maxLength: 32 },
				firstname: { type: 'string', maxLength: 32 },
				lastname: { type: 'string', maxLength: 32 },
				group: { type: 'integer' },
				permissions: { type: 'array', items: { type: 'string' } },
				created: { type: 'integer' },
			},
		};
	}

	static get relationMappings() {
		const Device = require('./device');
		const User = require('./user');
		const Log = require('./log');
		const Journal = require('./journal');
		const Session = require('./session');
		return {
			logs: {
				relation: Model.HasManyRelation,
				modelClass: Log,
				join: {
					from: `${Session.tableName}.id`,
					to: `${Log.tableName}.session`,
				},
			},
			journal: {
				relation: Model.HasManyRelation,
				modelClass: Journal,
				join: {
					from: `${Session.tableName}.id`,
					to: `${Journal.tableName}.session`,
				},
			},
			sessions: {
				relation: Model.HasManyRelation,
				modelClass: Session,
				join: {
					from: `${User.tableName}.id`,
					to: `${Session.tableName}.user`,
				},
			},
		};
	}
}
