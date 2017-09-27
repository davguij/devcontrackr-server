import DBConnector from '../connectors/db';

const db = new DBConnector();

const ConferenceResolvers = {
	RootQuery: {
		conferences: () => db.getAll('Conferences'),
		conference: (_, { id }) => db.getOne('Conferences', id),
		speakers: () => db.getAll('Speakers'),
		speaker: (_, { id }) => db.getOne('Speakers', id),
	},
	Conference: {
		speakers({ speakers }, _, context) {
			console.log(speakers);
			// need a table join here...!
			return [{ id: speakers[0].id, name: 'David Guijarro' }];
		},
	},
	RootMutation: {
		createConference: (_, { input }) => db.create('Conferences', input),
		updateConference: (_, { input }) => db.update('Conferences', input),
		createSpeaker: (_, { input }) => db.create('Speakers', input),
		updateSpeaker: (_, { input }) => db.update('Speakers', input),
	},
};

export default ConferenceResolvers;
