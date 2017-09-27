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

	async create(entity, id, payload) {
		const lastModified = {
			last_modified: {
				author: 'guijarro.dav@gmail.com', // TODO obv needs to be parametrized
				datetime: Date.now().toString(),
			},
		};
		const toBeSaved = Object.assign({}, { id }, payload, lastModified);
		const result = await this.rdb
			.table(entity)
			.insert(toBeSaved)
			.run();
		if (result.errors > 0) return new Error(result.first_error);
		return toBeSaved;
	}

	async update(entity, payload) {
		const { id } = payload;
		const lastModified = {
			last_modified: {
				author: 'guijarro.dav@gmail.com', // TODO obv needs to be parametrized
				datetime: Date.now().toString(),
			},
		};
		const toBeSaved = Object.assign({}, payload, lastModified);
		const result = await this.rdb
			.get(id)
			.update(toBeSaved)
			.run();
		if (result.errors > 0) return new Error(result.first_error);
		return toBeSaved;
	}
}
