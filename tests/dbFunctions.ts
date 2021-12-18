import { getRepository, getConnection } from 'typeorm';
import { init as initializeApp } from '../src/app';
import { ExamEntity } from '../src/entities/ExamEntity';
import { TeacherEntity } from '../src/entities/TeacherEntity';
import { ClassEntity } from '../src/entities/ClassEntity';
import { SubjectEntity } from '../src/entities/SubjectEntity';
import * as factory from './factories/factories';

async function init() {
    await initializeApp();
}

async function close() {
    await getConnection().close();
}

async function populate(type: string) {
    if (type === 'exams' || type === 'full') return await populateExams();
    if (type === 'subjects') return await populateSubject();
}

async function createSubject() {
    const validSubject = factory.getValidSubject();
    const subject = getRepository(SubjectEntity).create(validSubject);
    return await getRepository(SubjectEntity).save(subject);
}

async function createTeacher() {
    const validTeacher = factory.getValidTeacher();
    const teacher = getRepository(TeacherEntity).create(validTeacher);
    return await getRepository(TeacherEntity).save(teacher);
}

async function createClass(teacher: TeacherEntity, subject: SubjectEntity){
    const validClass = factory.getValidClass(teacher, subject);
    const classs = getRepository(ClassEntity).create(validClass);
    return await getRepository(ClassEntity).save(classs);
}

async function createExam(classs: ClassEntity) {
    const validExam = factory.getValidExam(classs);
    const exam = getRepository(ExamEntity).create(validExam);
    return await getRepository(ExamEntity).save(exam);
}

async function populateExams(): Promise<Population> {
    const teacher = await createTeacher();
    const subject = await createSubject();
    const classs = await createClass(teacher, subject);
    const exam = await createExam(classs);

    return {
        teacher,
        subject,
        class: classs,
        exam,
    }
}

async function populateSubject(): Promise<Population> {
    const subject = await createSubject();

    return {
        teacher: null,
        subject,
        class: null,
        exam: null,
    }
}

async function erase() {
    await getRepository(ExamEntity).delete({});
    await getRepository(ClassEntity).delete({});
    await getRepository(TeacherEntity).delete({});
    await getRepository(SubjectEntity).delete({});
}

interface Population {
    teacher: TeacherEntity;
    subject: SubjectEntity;
    class: ClassEntity;
    exam: ExamEntity;
}

export {
    populate,
    close,
    init,
    erase,
    Population,
}
