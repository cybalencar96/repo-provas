import { getRepository } from 'typeorm';
import { ClassEntity } from '../entities/ClassEntity';
import { ExamEntity } from '../entities/ExamEntity';
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
        .where("subject.name LIKE :subject", { subject: `%${subject}%` })
        .andWhere("teacher.name LIKE :teacher", { teacher: `%${teacher}%` })
        .andWhere("exams.category LIKE :category", { category: `%${category}%` })
        .andWhere("exams.name LIKE :name", { name: `%${name}%` })
        .getMany()

    
    return exams;
}

export {
    getExams,
}