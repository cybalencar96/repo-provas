import { getRepository } from 'typeorm';
import { SubjectEntity } from '../entities/SubjectEntity';
import { Subject, SubjectWIthExams } from '../contracts/SubjectContracts';
import * as examsService from './examsService';
import { ClassEntity } from '../entities/ClassEntity';


interface SubjectWithTeachers {
    id: number;
    name: string;
    period: number;
    teachers: string[];
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

async function addSubject(subjectInfos: Subject) {
    const subject = getRepository(SubjectEntity).create(subjectInfos);

    const newSubject = await getRepository(SubjectEntity).save(subject);

    return newSubject;
}

async function getOne(subjectName: string): Promise<SubjectEntity> {
    const subjects = await getRepository(SubjectEntity).find({ name: subjectName });

    return subjects[0];
}

async function getMany(filters: any = {}): Promise<SubjectWithTeachers[]> {
    const {
        name = '',
        teacher = '',
    } = filters;

    const subjects = await getRepository(SubjectEntity)
    .createQueryBuilder('subjects')
    .leftJoinAndSelect('subjects.classes', 'classes')
    .leftJoinAndSelect('classes.teacher', 'teacher')
    .where("subjects.name LIKE :name", { name: `%${name}%` })
    .andWhere("teacher.name ILIKE :teacher", { teacher: `%${teacher}%` })
    .getMany()

    return subjects.map(subject => subject.getWithTeachers());
}

export {
    getWithExams,
    addSubject,
    getOne,
    getMany,
}