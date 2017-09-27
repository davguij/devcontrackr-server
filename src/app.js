import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';

const app = express();

app.get('/', (req, res) => {
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
