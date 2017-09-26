const ConferenceResolvers = {
	Query: {
		conferences: () => [],
		conference: (_, { id }) => ({ id }),
	},
	Mutation: {
		createConference: (_, { input }) => ({ input }),
	},
};

export default ConferenceResolvers;
