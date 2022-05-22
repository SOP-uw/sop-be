import { Model } from 'objection';

export class Device extends Model {
	static get tableName() {
		return 'devices';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id: { type: 'string', maxLength: 32 },
				name: { type: ['string', 'null'], maxLength: 255 },
				browser: { type: ['string', 'null'], maxLength: 255 },
				version: { type: ['string', 'null'], maxLength: 255 },
				os: { type: ['string', 'null'], maxLength: 255 },
				ua: { type: 'string' },
				created: { type: 'integer' },
			},
		};
	}

	static get relationMappings() {
		const Session = require('./session');
		return {
			sessions: {
				relation: Model.HasManyRelation,
				modelClass: Session,
				join: {
					from: `${Device.tableName}.id`,
					to: `${Session.tableName}.device`,
				},
			},
		};
	}
}
