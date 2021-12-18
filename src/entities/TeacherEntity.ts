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

    getWithSubjects() {
        const seenSubjects: string[] = [];

        return {
            id: this.id,
            name: this.name,
            subjects: this.classes.filter(classs => {
                if (!seenSubjects.includes(classs.subject.name)){
                    seenSubjects.push(classs.subject.name);
                    return true;
                }
                return false;
            }).map(classs => classs.subject.name)
        };
    }
}