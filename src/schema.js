import { makeExecutableSchema } from 'graphql-tools';
// import TestSchema from './typedefs/Test.graphql';
import Conference from './typedefs/Conference.graphql';
import Location from './typedefs/Location.graphql';
import Modif from './typedefs/Modif.graphql';
import Speaker from './typedefs/Speaker.graphql';
import Ticket from './typedefs/Ticket.graphql';
import WebPresence from './typedefs/WebPresence.graphql';

import ConferenceResolvers from './resolvers/Conference';

const schema = makeExecutableSchema({
	typeDefs: [
		// TestSchema,
		Conference,
		Location,
		Modif,
		Speaker,
		Ticket,
		WebPresence,
	],
	resolvers: ConferenceResolvers,
});

export default schema;
