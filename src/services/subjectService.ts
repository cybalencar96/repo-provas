import { getRepository } from 'typeorm';
import { SubjectEntity } from '../entities/SubjectEntity';
import * as examsService from './examsService';

interface SubjectWIthExams {
    id: number;
    name: string;
    period: string;
    exams: object[];
}

async function getWithExams(): Promise<SubjectWIthExams[]> {
    const subjects = await getRepository(SubjectEntity).find();
    const exams = await examsService.getExams();

    const subjectsWithExams = subjects.map(subject => {
        const subjectWithExams: SubjectWIthExams = {
            ...subject,
            exams: [],
        }
        
        subjectWithExams.exams = exams.filter(exam => exam.class.subject.id === subject.id);

        return subjectWithExams;
    });

    return subjectsWithExams;
}

export {
    getWithExams,
}