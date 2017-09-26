import DBConnector from '../connectors/db';

const db = new DBConnector();

const ConferenceResolvers = {
	Query: {
		conferences: () => db.getAll('Conferences'),
		conference: (_, { id }) => db.getOne('Conferences', id),
	},
	Mutation: {
		createConference: (_, { input }) => {
			console.log(input);
			return db.create('Conferences', input);
		},
	},
};

export default ConferenceResolvers;
