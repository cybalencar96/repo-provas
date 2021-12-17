import { getRepository } from 'typeorm';
import { TeacherEntity } from '../entities/TeacherEntity';

async function get() {
    const teachers = await getRepository(TeacherEntity).find();

    return teachers;
}

export {
    get,
}