
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ClassEntity } from "./ClassEntity";

@Entity('subjects')
export class SubjectEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    period: number;

    @OneToMany(() => ClassEntity, classs => classs.subject)
    classes: ClassEntity[];
}