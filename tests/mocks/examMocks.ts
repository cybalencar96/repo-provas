import { IExamService } from '../../src/contracts/ExamContract';

const mockExam: IExamService = {
    id: expect.any(Number),
    name: expect.any(String),
    category: expect.any(String),
    class: {
        id: expect.any(Number),
        subject: {
            id: expect.any(Number),
            name: expect.any(String),
            period: expect.any(Number)
        },
        teacher: {
            id: expect.any(Number),
            name: expect.any(String),
        }
    },
    file: {
        id: expect.any(Number),
        name: expect.any(String),
        url: expect.any(String),
        size: expect.any(Number),
        key: expect.any(String),
    }
};

export {
    mockExam,
}