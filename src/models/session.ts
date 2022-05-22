import { Model } from 'objection';

export class Session extends Model {
	static get tableName() {
		return 'sessions';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id: { type: 'string', maxLength: 32 },
				user: { type: 'string', maxLength: 32 },
				device: { type: 'string', maxLength: 32 },
				lastActive: { type: 'integer' },
			},
		};
	}

	static get relationMappings() {
		const Device = require('./device');
		const User = require('./user');
		const Log = require('./log');
		const Journal = require('./journal');
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
			users: {
				relation: Model.HasOneRelation,
				modelClass: User,
				join: {
					from: `${Session.tableName}.user`,
					to: `${User.tableName}.id`,
				},
			},
			sessions: {
				relation: Model.HasManyRelation,
				modelClass: Session,
				join: {
					from: `${Session.tableName}.device`,
					to: `${Device.tableName}.id`,
				},
			},
		};
	}
}
