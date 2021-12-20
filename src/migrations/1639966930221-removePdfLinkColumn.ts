import {MigrationInterface, QueryRunner} from "typeorm";

export class removePdfLinkColumn1639966930221 implements MigrationInterface {
    name = 'removePdfLinkColumn1639966930221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "link_pdf"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" ADD "link_pdf" character varying NOT NULL`);
    }

}
