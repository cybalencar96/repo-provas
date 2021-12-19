import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ExamEntity } from './ExamEntity';

@Entity('files')
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    size: number;

    @Column()
    key: string;
}