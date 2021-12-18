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

async function populateExams() {
    const validTeacher = factory.getValidTeacher();
    const teacher = getRepository(TeacherEntity).create(validTeacher);
    const newTeacher = await getRepository(TeacherEntity).save(teacher);

    const validSubject = factory.getValidSubject();
    const subject = getRepository(SubjectEntity).create(validSubject);
    const newSubject = await getRepository(SubjectEntity).save(subject);

    const validClass = factory.getValidClass(newTeacher, newSubject);
    const classs = getRepository(ClassEntity).create(validClass);
    const newClass = await getRepository(ClassEntity).save(classs);

    const validExam = factory.getValidExam(newClass);
    const exam = getRepository(ExamEntity).create(validExam);
    const newExam = await getRepository(ExamEntity).save(exam);

    return {
        teacher: newTeacher,
        subject: newSubject,
        class: newClass,
        exam: newExam,
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
    populateExams,
    close,
    init,
    erase,
    Population,
}
