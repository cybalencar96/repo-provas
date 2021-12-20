import { getRepository } from 'typeorm';
import { ExamEntity } from '../entities/ExamEntity';
import { IExamController } from '../contracts/ExamContract';
import { FileEntity } from '../entities/FileEntity';
import * as subjectService from './subjectService';
import * as teacherService from './teacherService';
import * as classService from './classService';
import ExamError from '../errors/ExamError';

async function getExams(filters: any = {}) {
    const {
        teacher = '',
        subject = '',
        category = '',
        name = '',
    } = filters;
    
    const exams = await getRepository(ExamEntity)
        .createQueryBuilder('exams')
        .leftJoinAndSelect('exams.class', 'class')
        .leftJoinAndSelect('class.subject', 'subject')
        .leftJoinAndSelect('class.teacher', 'teacher')
        .leftJoinAndSelect('exams.file', 'file')
        .where("subject.name LIKE :subject", { subject: `%${subject}%` })
        .andWhere("teacher.name LIKE :teacher", { teacher: `%${teacher}%` })
        .andWhere("exams.category LIKE :category", { category: `%${category}%` })
        .andWhere("exams.name LIKE :name", { name: `%${name}%` })
        .getMany()

    
    return exams;
}

async function addExam(examInfos: IExamController, uploadedFile: Express.MulterS3.File) {
    const {
        originalname,
        location,
        size,
        key,
        filename,
    } = uploadedFile;

    const subject = await subjectService.getOne(examInfos.subject);
    const teacher = await teacherService.getOne(examInfos.teacher);

    if (!subject || !teacher) {
        throw new ExamError(`
            ${!subject ? 'subject not found.' : ''}
            ${!teacher ? 'teacher not found.' : ''}
        `)
    }

    const classs = await classService.addClass({
        teacher,
        subject,
    });

    const file = getRepository(FileEntity).create({
        name: originalname,
        url: location,
        size: size,
        key: key ? key : filename,
    });

    const newFile = await getRepository(FileEntity).save(file);

    const exam = getRepository(ExamEntity).create({
        name: examInfos.name,
        category: examInfos.category,
        linkPdf: examInfos.linkPdf,
        class: classs,
        file: newFile,
    });

    return await getRepository(ExamEntity).save(exam);
}

export {
    getExams,
    addExam,
}