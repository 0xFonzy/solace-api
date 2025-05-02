import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('advocates')
export class Advocate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  city: string;

  @Column()
  degree: string;

  @Column('text', { array: true })
  specialties: string[];

  @Column()
  yearsOfExperience: number;

  @Column()
  phoneNumber: string;

  @Column()
  imageUrl: string;
}
