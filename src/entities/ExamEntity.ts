import { allow } from "joi";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ClassEntity } from "./ClassEntity";

@Entity('exams')
export class ExamEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    category: string;

    @Column({ name: 'link_pdf' })
    linkPdf: string;

    @ManyToOne(() => ClassEntity, classs => classs.id, { eager: true })
    @JoinColumn({ name: 'class_id' })
    class: ClassEntity;
}