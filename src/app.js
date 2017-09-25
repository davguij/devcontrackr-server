import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';

const app = express();

// const rdb = require('rethinkdbdash')({
// 	servers: [{ host: process.env.RDB_HOST, port: process.env.RDB_PORT }],
// });

app.get('/', (req, res) => {
	// rdb.tableList().run();
	res.send('Hello World!');
});

app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({
		schema,
	}),
);

app.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql',
	}),
);

export default app;
