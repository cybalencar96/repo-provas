import {MigrationInterface, QueryRunner} from "typeorm";

export class addLinkPdfColumn1639793606375 implements MigrationInterface {
    name = 'addLinkPdfColumn1639793606375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" ADD "link_pdf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "period"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "period" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "period"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "period" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "link_pdf"`);
    }

}
