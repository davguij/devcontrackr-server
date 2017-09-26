export default class DBConnector {
	constructor() {
		// eslint-disable-next-line global-require
		this.rdb = require('rethinkdbdash')({
			servers: [{ host: process.env.RDB_HOST, port: process.env.RDB_PORT }],
			db: process.env.RDB_DATABASE_NAME,
		});
	}

	async getAll(entity) {
		return this.rdb.table(entity).run();
	}

	async getOne(entity, id) {
		return this.rdb
			.table(entity)
			.get(id)
			.run();
	}

	async create(entity, payload) {
		return this.rdb
			.table(entity)
			.insert(payload)
			.run();
	}
}
