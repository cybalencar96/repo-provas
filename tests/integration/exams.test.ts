import '../../src/setup';
import supertest from 'supertest';
import app from '../../src/app';
import { mockExam } from '../mocks/examMocks';
import * as dbTest from '../dbFunctions';

beforeAll(async () => {
    await dbTest.init();
});

afterAll(async () => {
    await dbTest.close();
});

describe('exams ROUTES', () => {
    let population: dbTest.Population;

    beforeEach(async () => population = await dbTest.populate('exams'));
    afterEach(async () => await dbTest.erase())

    test('should return array of exams', async () => {
        const result = await supertest(app).get('/exams');

        expect(result.status).toEqual(200);
        expect(result.body[0]).toEqual(mockExam);
    });

    test('should return exam when added', async () => {
        const exam = {
            name: '2018.2',
            category: 'P2',
            subject: population.subject.name,
            teacher: population.teacher.name,
            linkPdf: 'https://www.youtube.com',
        }

        const result = await supertest(app).post('/exams').send(exam);
        
        expect(result.status).toEqual(200);
        expect(result.body).toEqual(mockExam);
    });
});