import faker from 'faker';
import { TeacherEntity } from '../../src/entities/TeacherEntity';
import { SubjectEntity } from '../../src/entities/SubjectEntity';
import { ClassEntity } from '../../src/entities/ClassEntity';

function getValidExam(classs: ClassEntity) {
    const possibleCategories = ['P1', 'P2', 'P3', '2ch', 'Outras']
    return {
        name: faker.name.findName(),
        category: possibleCategories[faker.datatype.number(4)],
        class: classs,
        linkPdf: faker.internet.url(),
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

export {
    getValidExam,
    getValidClass,
    getValidSubject,
    getValidTeacher,
}