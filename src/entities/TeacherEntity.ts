import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ClassEntity } from "./ClassEntity";

@Entity('teachers')
export class TeacherEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(() => ClassEntity, classs => classs.teacher)
    classes: ClassEntity[];
}