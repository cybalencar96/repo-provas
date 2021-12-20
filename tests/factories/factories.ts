import faker from 'faker';
import { TeacherEntity } from '../../src/entities/TeacherEntity';
import { SubjectEntity } from '../../src/entities/SubjectEntity';
import { ClassEntity } from '../../src/entities/ClassEntity';
import { FileEntity } from '../../src/entities/FileEntity';

function getValidExam(classs: ClassEntity, file: FileEntity) {
    const possibleCategories = ['P1', 'P2', 'P3', '2ch', 'Outras']
    return {
        name: faker.name.findName(),
        category: possibleCategories[faker.datatype.number(4)],
        class: classs,
        file,
    }
}

function getValidClass(teacher: TeacherEntity, subject: SubjectEntity) {
    return {
        teacher,
        subject,
    }
}

function getValidSubject() {
    return {
        name: faker.name.findName(),
        period: faker.datatype.number(10),
    }
}

function getValidTeacher() {
    return {
        name: faker.name.findName(),
    }
}

function getValidFile() {
    return {
        name: faker.name.findName(),
        url: faker.internet.url(),
        size: faker.datatype.number(80000),
        key: faker.datatype.hexaDecimal(16) + '-teste.pdf',
    }
}

export {
    getValidExam,
    getValidClass,
    getValidSubject,
    getValidTeacher,
    getValidFile,
}