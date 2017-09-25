import express from 'express';

const app = express();

const rdb = require('rethinkdbdash')({
	servers: [{ host: process.env.RDB_HOST, port: process.env.RDB_PORT }],
});

app.get('/', (req, res) => {
	rdb.tableList().run();
	res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Example app listening on port 3000!');
});
