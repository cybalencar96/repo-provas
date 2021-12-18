import { mockExam } from "./examMocks";

const mockTeacherWithExam = {
		id: expect.any(Number),
		name: expect.any(String),
		exams: [mockExam]
}

const mockTeacherWithSubjects = {
	id: expect.any(Number),
	name: expect.any(String),
	subjects: expect.any(Array),
}

export {
    mockTeacherWithExam,
	mockTeacherWithSubjects,
}