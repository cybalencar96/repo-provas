import '../../src/setup';
import supertest from 'supertest';
import app from '../../src/app';
import * as dbTest from '../dbFunctions';
import { mockSubjectWithExam } from '../mocks/subjectMocks';

beforeAll(async () => {
    await dbTest.init();
});

afterAll(async () => {
    await dbTest.close();
});

describe('subject ROUTES', () => {
    let population: dbTest.Population;

    beforeEach(async () => population = await dbTest.populate('full'));
    afterEach(async () => await dbTest.erase());

    test('should return subject array with exams', async () => {
        const result = await supertest(app).get('/subjects');

        expect(result).toEqual(mockSubjectWithExam);
    });
});