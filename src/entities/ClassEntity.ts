import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { TeacherEntity } from './TeacherEntity';
import { SubjectEntity } from './SubjectEntity';
import { ExamEntity } from "./ExamEntity";

@Entity('classes')
export class ClassEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => TeacherEntity, teacher => teacher.id, { eager: true })
    @JoinColumn({ name: 'teacher_id' })
    teacher: TeacherEntity;

    @ManyToOne(() => SubjectEntity, subject => subject.id, { eager: true })
    @JoinColumn({ name: 'subject_id' })
    subject: SubjectEntity;

    @OneToMany(() => ExamEntity, exam => exam.class)
    classes: ExamEntity[];
}