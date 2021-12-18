import { mockExam } from "./examMocks";

const mockSubjectWithExam = {
		id: expect.any(Number),
		name: expect.any(String),
		period: expect.any(Number),
		exams: [mockExam]
}

const mockSubjectWithTeachers = {
	id: expect.any(Number),
	name: expect.any(String),
	period: expect.any(Number),
	teachers: expect.any(Array),
}

export {
    mockSubjectWithExam,
	mockSubjectWithTeachers,
}