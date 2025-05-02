import { MigrationInterface, QueryRunner } from 'typeorm';
import { Specialty } from '../advocates/constants/specialty.constants';
import { City } from '../advocates/constants/city.constants';

export class SeedAdvocates1711379245120 implements MigrationInterface {
  name = 'SeedAdvocates1711379245120';

  private readonly maleImages: string[] = [
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=M3w3NDU4NDF8MHwxfHNlYXJjaHw1fHxkb2N0b3J8ZW58MHx8fHwxNzQ2MTczNjA4fDA&ixlib=rb-4.0.3',
    'https://images.unsplash.com/profile-1743144238635-09fa01da1e4bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=M3w3NDU4NDF8MHwxfHNlYXJjaHwzfHxkb2N0b3J8ZW58MHx8fHwxNzQ2MTczNjA4fDA&ixlib=rb-4.0.3',
    'https://images.unsplash.com/profile-1680783008102-64e9b9bd6a38image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=M3w3NDU4NDF8MHwxfHNlYXJjaHw2fHxkb2N0b3J8ZW58MHx8fHwxNzQ2MTczNjA4fDA&ixlib=rb-4.0.3',
    'https://images.unsplash.com/profile-1584566982645-74be0a12137eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
  ];

  private readonly femaleImages: string[] = [
    'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixid=M3w3NDU4NDF8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzQ2MTczNjA4fDA&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=M3w3NDU4NDF8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBkb2N0b3J8ZW58MHx8fHwxNzQ2MTczODQ1fDA&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=M3w3NDU4NDF8MHwxfHNlYXJjaHwzfHxmZW1hbGUlMjBkb2N0b3J8ZW58MHx8fHwxNzQ2MTczODQ1fDA&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixid=M3w3NDU4NDF8MHwxfHNlYXJjaHw0fHxmZW1hbGUlMjBkb2N0b3J8ZW58MHx8fHwxNzQ2MTczODQ1fDA&ixlib=rb-4.0.3',
    'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  private getRandomImage(gender: string): string {
    const images = gender === 'male' ? this.maleImages : this.femaleImages;
    return images[Math.floor(Math.random() * images.length)];
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Seed data
    const advocates = [
      {
        firstName: 'John',
        lastName: 'Doe',
        city: City.NEW_YORK,
        degree: 'MD',
        specialties: [
          Specialty.BIPOLAR,
          Specialty.MEDICATION_PRESCRIBING,
          Specialty.LEARNING_DISORDERS,
        ],
        yearsOfExperience: 10,
        phoneNumber: '5551234567',
        gender: 'male',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        city: City.LOS_ANGELES,
        degree: 'PhD',
        specialties: [Specialty.ADHD, Specialty.LIFE_COACHING],
        yearsOfExperience: 8,
        phoneNumber: '5559876543',
        gender: 'female',
      },
      {
        firstName: 'Alice',
        lastName: 'Johnson',
        city: City.CHICAGO,
        degree: 'MSW',
        specialties: [Specialty.DIABETIC_DIET_NUTRITION],
        yearsOfExperience: 5,
        phoneNumber: '5554567890',
        gender: 'female',
      },
      {
        firstName: 'Michael',
        lastName: 'Brown',
        city: City.HOUSTON,
        degree: 'MD',
        specialties: [
          Specialty.GENERAL_MENTAL_HEALTH,
          Specialty.DIABETIC_DIET_NUTRITION,
        ],
        yearsOfExperience: 12,
        phoneNumber: '5556543210',
        gender: 'male',
      },
      {
        firstName: 'Emily',
        lastName: 'Davis',
        city: City.PHOENIX,
        degree: 'PhD',
        specialties: [Specialty.SUICIDE_HISTORY, Specialty.LIFE_COACHING],
        yearsOfExperience: 7,
        phoneNumber: '5553210987',
        gender: 'female',
      },
      {
        firstName: 'Chris',
        lastName: 'Martinez',
        city: City.PHILADELPHIA,
        degree: 'MSW',
        specialties: [Specialty.SLEEP_ISSUES, Specialty.RELATIONSHIP_ISSUES],
        yearsOfExperience: 9,
        phoneNumber: '5557890123',
        gender: 'male',
      },
      {
        firstName: 'Jessica',
        lastName: 'Taylor',
        city: City.SAN_ANTONIO,
        degree: 'MD',
        specialties: [
          Specialty.TRAUMA_AND_PTSD,
          Specialty.LGBTQ,
          Specialty.MEDICATION_PRESCRIBING,
        ],
        yearsOfExperience: 11,
        phoneNumber: '5554561234',
        gender: 'female',
      },
      {
        firstName: 'David',
        lastName: 'Harris',
        city: City.SAN_DIEGO,
        degree: 'PhD',
        specialties: [
          Specialty.WEIGHT_LOSS_NUTRITION,
          Specialty.EATING_DISORDERS,
        ],
        yearsOfExperience: 6,
        phoneNumber: '5557896543',
        gender: 'male',
      },
      {
        firstName: 'Laura',
        lastName: 'Clark',
        city: City.DALLAS,
        degree: 'MSW',
        specialties: [
          Specialty.COACHING,
          Specialty.LIFE_COACHING,
          Specialty.OBSESSIVE_COMPULSIVE_DISORDERS,
        ],
        yearsOfExperience: 4,
        phoneNumber: '5550123456',
        gender: 'female',
      },
      {
        firstName: 'Daniel',
        lastName: 'Lewis',
        city: City.SAN_JOSE,
        degree: 'MD',
        specialties: [
          Specialty.LEARNING_DISORDERS,
          Specialty.RELATIONSHIP_ISSUES,
        ],
        yearsOfExperience: 13,
        phoneNumber: '5553217654',
        gender: 'male',
      },
      {
        firstName: 'Sarah',
        lastName: 'Lee',
        city: City.AUSTIN,
        degree: 'PhD',
        specialties: [Specialty.BIPOLAR],
        yearsOfExperience: 10,
        phoneNumber: '5551238765',
        gender: 'female',
      },
      {
        firstName: 'James',
        lastName: 'King',
        city: City.JACKSONVILLE,
        degree: 'MSW',
        specialties: [
          Specialty.WEIGHT_LOSS_NUTRITION,
          Specialty.EATING_DISORDERS,
        ],
        yearsOfExperience: 5,
        phoneNumber: '5556540987',
        gender: 'male',
      },
      {
        firstName: 'Megan',
        lastName: 'Green',
        city: City.SAN_FRANCISCO,
        degree: 'MD',
        specialties: [
          Specialty.PEDIATRICS,
          Specialty.SLEEP_ISSUES,
          Specialty.ADHD,
        ],
        yearsOfExperience: 14,
        phoneNumber: '5559873456',
        gender: 'female',
      },
      {
        firstName: 'Joshua',
        lastName: 'Walker',
        city: City.COLUMBUS,
        degree: 'PhD',
        specialties: [
          Specialty.BIPOLAR,
          Specialty.MEDICATION_PRESCRIBING,
          Specialty.LEARNING_DISORDERS,
        ],
        yearsOfExperience: 9,
        phoneNumber: '5556781234',
        gender: 'male',
      },
      {
        firstName: 'Amanda',
        lastName: 'Hall',
        city: City.FORT_WORTH,
        degree: 'MSW',
        specialties: [
          Specialty.BIPOLAR,
          Specialty.DOMESTIC_ABUSE,
          Specialty.NEUROPSYCHOLOGICAL_TESTING,
        ],
        yearsOfExperience: 3,
        phoneNumber: '5559872345',
        gender: 'female',
      },
    ];

    // Insert each advocate
    for (const advocate of advocates) {
      const imageUrl = this.getRandomImage(advocate.gender);
      await queryRunner.query(
        `
        INSERT INTO advocates (
          "firstName", "lastName", city, degree, specialties, "yearsOfExperience", 
          "phoneNumber", "imageUrl", gender
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9
        )
      `,
        [
          advocate.firstName,
          advocate.lastName,
          advocate.city,
          advocate.degree,
          advocate.specialties,
          advocate.yearsOfExperience,
          advocate.phoneNumber,
          imageUrl,
          advocate.gender,
        ],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove all seeded advocates
    await queryRunner.query(`DELETE FROM advocates`);
  }
}
