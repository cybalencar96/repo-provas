import { getRepository } from 'typeorm';
import { ClassEntity } from '../entities/ClassEntity';
import { IClass } from '../contracts/ClassContract';

async function addClass(classInfos: IClass) {
    const classs = getRepository(ClassEntity).create({
        teacher: classInfos.teacher,
        subject: classInfos.subject,
    });

    const newClass = await getRepository(ClassEntity).save(classs);

    return newClass;
}

export {
    addClass,
}