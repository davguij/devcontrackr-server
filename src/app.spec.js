import request from 'supertest';
import app from './app';

describe('Test the root path', () => {
	test('It should response the GET method', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});
});

describe('Test the graphql path', () => {
	test('It should not reponse the GET method', async () => {
		const response = await request(app).get('/graphql');
		expect(response.statusCode).toBe(400);
	});
});
