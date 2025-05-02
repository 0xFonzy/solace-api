import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSpecialtyEnum1711378645120 implements MigrationInterface {
  name = 'CreateSpecialtyEnum1711378645120';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TYPE "specialty" AS ENUM (
                'bipolar',
                'lgbtq',
                'medication_prescribing',
                'suicide_history',
                'general_mental_health',
                'mens_issues',
                'relationship_issues',
                'trauma_and_ptsd',
                'personality_disorders',
                'personal_growth',
                'substance_use',
                'pediatrics',
                'womens_issues',
                'chronic_pain',
                'weight_loss_nutrition',
                'eating_disorders',
                'diabetic_diet_nutrition',
                'coaching',
                'life_coaching',
                'obsessive_compulsive_disorders',
                'neuropsychological_testing',
                'adhd',
                'sleep_issues',
                'schizophrenia_psychotic_disorders',
                'learning_disorders',
                'domestic_abuse'
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TYPE "specialty"`);
  }
}
