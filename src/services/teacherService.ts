import { getRepository } from 'typeorm';
import { TeacherEntity } from '../entities/TeacherEntity';
import * as examsService from './examsService';
import { TeacherWIthExams, Teacher} from '../contracts/TeacherContracts';
import { ClassEntity } from '../entities/ClassEntity';

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

async function addTeacher(teacherInfos: Teacher) {
    const teacher = getRepository(TeacherEntity).create(teacherInfos);

    const newTeacher = await getRepository(TeacherEntity).save(teacher);

    return newTeacher;
}

async function getOne(teacherName: string): Promise<TeacherEntity> {
    const teachers = await getRepository(TeacherEntity).find({ name: teacherName });

    return teachers[0];
}

async function getMany(filters: any = {}): Promise<TeacherEntity[]> {
    const {
        name = '',
        subject = '',
    } = filters;

    const teachers = await getRepository(TeacherEntity)
    .createQueryBuilder('teachers')
    .leftJoinAndSelect('teachers.classes', 'classes')
    .leftJoinAndSelect('classes.subject', 'subject')
    .where("teachers.name ILIKE :name", { name: `%${name}%` })
    .andWhere("subject.name ILIKE :subject", { subject: `%${subject}%` })
    .getMany()

    return teachers;
}

export {
    getWithExams,
    addTeacher,
    getOne,
    getMany,
}