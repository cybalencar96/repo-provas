import { getRepository } from 'typeorm';
import { ClassEntity } from '../entities/ClassEntity';
import { ExamEntity } from '../entities/ExamEntity';

async function getBySubject(subject: string) {
    /* const exams = await getRepository(ExamEntity).find({
        where: { subject },
        relations: ['classes', 'subjects']
    }); */
    
    const exams = await getRepository(ClassEntity).find({
        relations: ['subjects']
    });
    
    return exams;
}

export {
    getBySubject,
}