import { SubjectEntity } from '../entities/SubjectEntity';
import { TeacherEntity } from '../entities/TeacherEntity';

interface IClass {
    teacher: TeacherEntity;
    subject: SubjectEntity;
}

export { IClass };