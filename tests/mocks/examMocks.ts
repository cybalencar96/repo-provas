import { IExamService } from '../../src/contracts/ExamContract';

const mockExam: IExamService = {
    id: expect.any(Number),
    name: expect.any(String),
    category: expect.any(String),
    linkPdf: expect.any(String),
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
    }
};

export {
    mockExam,
}