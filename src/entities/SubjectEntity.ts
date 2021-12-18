
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

    getWithTeachers() {
        const seenTeachers: string[] = [];

        return {
            id: this.id,
            name: this.name,
            period: this.period,
            teachers: this.classes.filter(classs => {
                if (!seenTeachers.includes(classs.teacher.name)){
                    seenTeachers.push(classs.teacher.name);
                    return true;
                }
                return false;
            }).map(classs => classs.teacher.name)
        };
    }
}