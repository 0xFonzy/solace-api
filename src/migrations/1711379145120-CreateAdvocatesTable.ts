import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdvocatesTable1711379145120 implements MigrationInterface {
  name = 'CreateAdvocatesTable1711379145120';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Enable the uuid-ossp extension first
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(`
            CREATE TABLE "advocates" (
                "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "city" city NOT NULL,
                "degree" character varying NOT NULL,
                "specialties" specialty[] NOT NULL,
                "yearsOfExperience" integer NOT NULL,
                "phoneNumber" character varying NOT NULL,
                "imageUrl" character varying NOT NULL,
                "gender" character varying NOT NULL
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "advocates"`);
  }
}
