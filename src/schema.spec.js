import { addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

import schema from './schema';

addMockFunctionsToSchema({ schema });

const allConferencesQuery = `
    query allConferences {
        conferences {
            id
        }
    }
`;

const oneConferenceQuery = `
query oneConference {
    conference(id: 0) {
        name
    }
}
`;

describe('Test the schema', () => {
	test('conferences should return an array of Conferences', async () => {
		const result = await graphql(schema, allConferencesQuery);
		expect(result).toBeTruthy();
		expect(result.data).toBeTruthy();
		expect(Array.isArray(result.data.conferences)).toBe(true);
		expect(result.data.conferences[0]).toEqual(expect.objectContaining({ id: expect.any(String) }));
	});
	test('conference(id) should return one Conference', async () => {
		const result = await graphql(schema, oneConferenceQuery);
		console.log(result.data);
		expect(result).toBeTruthy();
		expect(result.data).toBeTruthy();
		expect(result.data.conference).toBeTruthy();
		expect(result.data.conference.name).toBeTruthy();
		expect(result.data.conference.name).toEqual('Hello World');
	});
});
