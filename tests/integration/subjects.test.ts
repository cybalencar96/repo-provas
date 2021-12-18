import '../../src/setup';
import supertest from 'supertest';
import app from '../../src/app';
import * as dbTest from '../dbFunctions';
import { mockSubjectWithExam, mockSubjectWithTeachers } from '../mocks/subjectMocks';

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

    test('should return subject array with exams when getSubjectsWithExams', async () => {
        const result = await supertest(app).get('/subjects');

        expect(result.status).toEqual(200);
        expect(result.body[0]).toEqual(mockSubjectWithExam);
    });

    test('should return subject array when getMany', async () => {
        const result = await supertest(app).get('/subjects/where');

        expect(result.status).toEqual(200);
        expect(result.body[0]).toEqual(mockSubjectWithTeachers);
    });
});