import '../../src/setup';
import supertest from 'supertest';
import app from '../../src/app';
import { mockExam } from '../mocks/examMocks';
import * as dbTest from '../dbFunctions';
import { deleteFilesFromUploads } from '../utils/helpers';

beforeAll(async () => {
    await dbTest.init();
});

afterAll(async () => {
    await dbTest.close();
});

describe('exams ROUTES', () => {
    let population: dbTest.Population;

    beforeEach(async () => population = await dbTest.populate('exams'));
    afterEach(async () => await dbTest.erase());

    test('should return array of exams', async () => {
        const result = await supertest(app).get('/exams');

        expect(result.status).toEqual(200);
        expect(result.body[0]).toEqual(mockExam);
    });

    test('should return 200 and exam when added', async () => {
        const result = await supertest(app)
            .post('/exams/')
            .set('Content-Type','multipart/form-data')
            .field('name', '2018.2')
            .field('category', 'P2')
            .field('subject', population.subject.name)
            .field('teacher', population.teacher.name)
            .attach('file', 'tests/mocks/teste.pdf')

        expect(result.status).toEqual(200);
        expect(result.body).toEqual(mockExam);

        deleteFilesFromUploads(result.body.file.key);
    });
});