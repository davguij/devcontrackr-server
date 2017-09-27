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
			// TODO maybe I need a table join here...!
			const returnedSpeakers = speakers.map(async speakerId =>
				db.getOne('Speakers', speakerId));
			return returnedSpeakers;
		},
	},
	RootMutation: {
		createConference: (_, { input }) => {
			const id = Buffer.from(input.web_presence.homepage).toString('base64');
			return db.create('Conferences', id, input);
		},
		updateConference: (_, { input }) => db.update('Conferences', input),
		createSpeaker: (_, { input }) => {
			const id = Buffer.from(input.twitter).toString('base64');
			return db.create('Speakers', id, input);
		},
		updateSpeaker: (_, { input }) => db.update('Speakers', input),
	},
};

export default ConferenceResolvers;
