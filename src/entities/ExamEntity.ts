import { allow } from "joi";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { ClassEntity } from "./ClassEntity";
import { FileEntity } from './FileEntity';

@Entity('exams')
export class ExamEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    category: string;

    @ManyToOne(() => ClassEntity, classs => classs.id, { eager: true })
    @JoinColumn({ name: 'class_id' })
    class: ClassEntity;

    @OneToOne(() => FileEntity, { eager: true })
    @JoinColumn({ name: 'file_id' })
    file: FileEntity;
}