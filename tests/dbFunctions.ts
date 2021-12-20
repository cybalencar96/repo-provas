import { getRepository, getConnection } from 'typeorm';
import { init as initializeApp } from '../src/app';
import { ExamEntity } from '../src/entities/ExamEntity';
import { TeacherEntity } from '../src/entities/TeacherEntity';
import { ClassEntity } from '../src/entities/ClassEntity';
import { SubjectEntity } from '../src/entities/SubjectEntity';
import * as factory from './factories/factories';
import { FileEntity } from '../src/entities/FileEntity';

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

async function createExam(classs: ClassEntity, file: FileEntity) {
    const validExam = factory.getValidExam(classs, file);
    const exam = getRepository(ExamEntity).create(validExam);
    return await getRepository(ExamEntity).save(exam);
}

async function createFile(): Promise<FileEntity> {
    const validFile = factory.getValidFile();
    const file = getRepository(FileEntity).create(validFile);
    return await getRepository(FileEntity).save(file);
}

async function populateExams(): Promise<Population> {
    const teacher = await createTeacher();
    const subject = await createSubject();
    const classs = await createClass(teacher, subject);
    const file = await createFile();
    const exam = await createExam(classs, file);

    return {
        teacher,
        subject,
        class: classs,
        exam,
        file,
    }
}

async function populateSubject(): Promise<Population> {
    const subject = await createSubject();

    return {
        teacher: null,
        subject,
        class: null,
        exam: null,
        file: null,
    }
}

async function erase() {
    await getRepository(ExamEntity).delete({});
    await getRepository(ClassEntity).delete({});
    await getRepository(TeacherEntity).delete({});
    await getRepository(SubjectEntity).delete({});
    await getRepository(FileEntity).delete({});
}

interface Population {
    teacher: TeacherEntity;
    subject: SubjectEntity;
    class: ClassEntity;
    exam: ExamEntity;
    file: FileEntity;
}

export {
    populate,
    close,
    init,
    erase,
    Population,
}
