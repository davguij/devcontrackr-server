import DBConnector from '../connectors/db';

const db = new DBConnector();

const ConferenceResolvers = {
	Query: {
		conferences: () => db.getAll('Conferences'),
		conference: (_, { id }) => db.getOne('Conferences', id),
	},
	Mutation: {
		createConference: (_, { input }) => db.create('Conferences', input),
		updateConference: (_, { input }) => db.update('Conferences', input),
	},
};

export default ConferenceResolvers;
