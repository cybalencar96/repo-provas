import '../../src/setup';
import supertest from 'supertest';
import app from '../../src/app';
import * as dbTest from '../dbFunctions';
import { mockTeacherWithExam, mockTeacherWithSubjects } from '../mocks/teacherMocks';

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

    test('should return teacher array with exams when getTeacherWithExams', async () => {
        const result = await supertest(app).get('/teachers');

        expect(result.status).toEqual(200);
        expect(result.body[0]).toEqual(mockTeacherWithExam);
    });

    test('should return teacher array when getMany', async () => {
        const result = await supertest(app).get('/teachers/where');

        expect(result.status).toEqual(200);
        expect(result.body[0]).toEqual(mockTeacherWithSubjects);
    });
});