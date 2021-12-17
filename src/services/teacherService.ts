import { getRepository } from 'typeorm';
import { TeacherEntity } from '../entities/TeacherEntity';
import * as examsService from './examsService';

interface TeacherWIthExams {
    id: number;
    name: string;
    exams: object[];
}

async function getWithExams(): Promise<TeacherWIthExams[]> {
    const teachers = await getRepository(TeacherEntity).find();
    const exams = await examsService.getExams();

    const teachersWithExams = teachers.map(teacher => {
        const teacherWithExams: TeacherWIthExams = {
            ...teacher,
            exams: [],
        }
        
        teacherWithExams.exams = exams.filter(exam => exam.class.teacher.id === teacher.id);

        return teacherWithExams;
    });

    return teachersWithExams;
}

export {
    getWithExams,
}