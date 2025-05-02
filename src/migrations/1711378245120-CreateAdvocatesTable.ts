import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdvocatesTable1711378245120 implements MigrationInterface {
  name = 'CreateAdvocatesTable1711378245120';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Enable the uuid-ossp extension first
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(`
            CREATE TABLE "advocates" (
                "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "city" character varying NOT NULL,
                "degree" character varying NOT NULL,
                "specialties" text[] NOT NULL,
                "yearsOfExperience" integer NOT NULL,
                "phoneNumber" character varying NOT NULL,
                "imageUrl" character varying NOT NULL
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "advocates"`);
  }
}
