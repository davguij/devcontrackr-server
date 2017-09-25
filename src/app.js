import express from 'express';

const app = express();

// const rdb = require('rethinkdbdash')({
// 	servers: [{ host: process.env.RDB_HOST, port: process.env.RDB_PORT }],
// });

app.get('/', (req, res) => {
	// rdb.tableList().run();
	res.send('Hello World!');
});

export default app;
