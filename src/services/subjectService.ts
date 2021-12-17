import { getRepository } from 'typeorm';
import { SubjectEntity } from '../entities/SubjectEntity';

async function get() {
    const subjects = await getRepository(SubjectEntity).find();

    return subjects;
}

export {
    get,
}