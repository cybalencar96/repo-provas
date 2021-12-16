import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { TeacherEntity } from './TeacherEntity';
import { SubjectEntity } from './SubjectEntity';
import { ExamEntity } from "./ExamEntity";

@Entity('classes')
export class ClassEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => TeacherEntity, { eager: true })
    @JoinColumn({ name: 'teacher_id' })
    teacher: TeacherEntity;

    @ManyToOne(() => SubjectEntity, { eager: true })
    @JoinColumn({ name: 'subject_id' })
    subject: SubjectEntity;
}