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
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"period" varchar(255) NOT NULL,
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
INSERT INTO subjects (name, period) VALUES ('Matematica', '5');
INSERT INTO subjects (name, period) VALUES ('Portugues', '3');
INSERT INTO subjects (name, period) VALUES ('Ciencias', '1');
INSERT INTO classes (teacher_id, subject_id) VALUES (1,1);
INSERT INTO classes (teacher_id, subject_id) VALUES (2,2);
INSERT INTO classes (teacher_id, subject_id) VALUES (2,3);
INSERT INTO exams (name, category, class_id) VALUES ('2022.1', 'P1', 1);
INSERT INTO exams (name, category, class_id) VALUES ('2022.1', 'P2', 1);
INSERT INTO exams (name, category, class_id) VALUES ('2019.1', 'PF', 2);
INSERT INTO exams (name, category, class_id) VALUES ('2019.1', '2ch', 3);


