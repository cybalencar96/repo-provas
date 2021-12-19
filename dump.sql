CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"class_id" int NOT NULL,
	"link_pdf" varchar(255) NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"period" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "classes" (
	"id" serial NOT NULL,
	"teacher_id" int NOT NULL,
	"subject_id" int NOT NULL,
	CONSTRAINT "classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("class_id") REFERENCES "classes"("id");


ALTER TABLE "classes" ADD CONSTRAINT "classes_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "classes" ADD CONSTRAINT "classes_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");



INSERT INTO teachers (name) VALUES ('Mr James');
INSERT INTO teachers (name) VALUES ('Ms Alice');
INSERT INTO teachers (name) VALUES ('Luiz de Redes');
INSERT INTO teachers (name) VALUES ('Arnald Bisson');
INSERT INTO teachers (name) VALUES ('Ana Claudia');
INSERT INTO subjects (name, period) VALUES ('Matematica', 5);
INSERT INTO subjects (name, period) VALUES ('Portugues', 3);
INSERT INTO subjects (name, period) VALUES ('Ciencias', 1);
INSERT INTO subjects (name, period) VALUES ('Controle Linear', 10);
INSERT INTO subjects (name, period) VALUES ('Fundacoes', 7);
INSERT INTO subjects (name, period) VALUES ('Programação', 5);
INSERT INTO classes (teacher_id, subject_id) VALUES (3,5);
INSERT INTO classes (teacher_id, subject_id) VALUES (4,4);
INSERT INTO classes (teacher_id, subject_id) VALUES (4,1);
INSERT INTO classes (teacher_id, subject_id) VALUES (5,5);
INSERT INTO classes (teacher_id, subject_id) VALUES (5,4);
INSERT INTO classes (teacher_id, subject_id) VALUES (4,4);
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2022.1', 'P1', 1, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2021.1', 'PF', 2, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2021.2', 'PF', 2, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2021.2', '2ch', 2, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2019.1', 'P1', 7, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2019.1', 'P2', 7, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2012.1', '2ch', 4, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2016.2', 'P1', 5, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2018.1', '2ch', 6, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2018.1', 'P3', 6, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2022.1', 'P1', 6, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2022.2', '2ch', 6, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');
INSERT INTO exams (name, category, class_id, link_pdf) VALUES ('2022.2', '2ch', 8, 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf');


