import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Specialty } from './constants/specialty.constants';
import { City } from './constants/city.constants';

@Entity('advocates')
export class Advocate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'enum', enum: City })
  city: City;

  @Column()
  degree: string;

  @Column('enum', { enum: Specialty, array: true })
  specialties: Specialty[];

  @Column()
  yearsOfExperience: number;

  @Column()
  phoneNumber: string;

  @Column()
  imageUrl: string;

  @Column()
  gender: string;
}
