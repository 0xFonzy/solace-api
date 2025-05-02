import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAdvocatesIndexes1711506000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create extension for trigram support
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS pg_trgm;`);

    // Create index for city
    await queryRunner.query(
      `CREATE INDEX IF NOT EXISTS "idx_advocates_city" ON "advocates" ("city");`,
    );

    // Create GIN index for specialties array
    await queryRunner.query(
      `CREATE INDEX IF NOT EXISTS "idx_advocates_specialties" ON "advocates" USING GIN ("specialties");`,
    );

    // Create trigram indexes for firstName and lastName
    await queryRunner.query(
      `CREATE INDEX IF NOT EXISTS "idx_advocates_firstname_trigram" ON "advocates" USING GIN ("firstName" gin_trgm_ops);`,
    );
    await queryRunner.query(
      `CREATE INDEX IF NOT EXISTS "idx_advocates_lastname_trigram" ON "advocates" USING GIN ("lastName" gin_trgm_ops);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop all created indexes
    await queryRunner.query(
      `DROP INDEX IF EXISTS "idx_advocates_lastname_trigram";`,
    );
    await queryRunner.query(
      `DROP INDEX IF EXISTS "idx_advocates_firstname_trigram";`,
    );
    await queryRunner.query(
      `DROP INDEX IF EXISTS "idx_advocates_specialties";`,
    );
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_advocates_city";`);

    // Note: We're not dropping the pg_trgm extension as it might be used by other parts of the application
  }
}
