import {MigrationInterface, QueryRunner} from "typeorm";

export class addTableFiles1639942821336 implements MigrationInterface {
    name = 'addTableFiles1639942821336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "files" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "url" character varying NOT NULL, "size" integer NOT NULL, "key" character varying NOT NULL, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "file_id" integer`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "UQ_aa9687fd98b35b6c1e454105c0e" UNIQUE ("file_id")`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_aa9687fd98b35b6c1e454105c0e" FOREIGN KEY ("file_id") REFERENCES "files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_aa9687fd98b35b6c1e454105c0e"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "UQ_aa9687fd98b35b6c1e454105c0e"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "file_id"`);
        await queryRunner.query(`DROP TABLE "files"`);
    }

}
