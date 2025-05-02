import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCityEnum1711379045120 implements MigrationInterface {
  name = 'CreateCityEnum1711379045120';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE "city" AS ENUM (
        'new_york',
        'los_angeles',
        'chicago',
        'houston',
        'phoenix',
        'philadelphia',
        'san_antonio',
        'san_diego',
        'dallas',
        'san_jose',
        'austin',
        'jacksonville',
        'san_francisco',
        'columbus',
        'fort_worth'
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TYPE "city"`);
  }
}
