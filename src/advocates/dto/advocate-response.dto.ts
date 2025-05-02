import { ApiProperty } from '@nestjs/swagger';
import { Advocate } from '../advocate.entity';
import { City, CityDisplayLabels } from '../constants/city.constants';
import {
  Specialty,
  SpecialtyDisplayLabels,
} from '../constants/specialty.constants';

type CityOption = {
  value: City;
  label: string;
};

type SpecialtyOption = {
  value: Specialty;
  label: string;
};

export class AdvocateResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty({ enum: City })
  city: CityOption;

  @ApiProperty()
  degree: string;

  @ApiProperty({
    type: [Object],
    description: 'Array of specialty options with value and label',
  })
  specialties: SpecialtyOption[];

  @ApiProperty()
  yearsOfExperience: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  gender: string;

  constructor(advocate: Advocate) {
    this.id = advocate.id;
    this.firstName = advocate.firstName;
    this.lastName = advocate.lastName;
    this.phoneNumber = advocate.phoneNumber;
    this.city = {
      value: advocate.city,
      label: CityDisplayLabels[advocate.city],
    };
    this.degree = advocate.degree;
    this.specialties = advocate.specialties.map((specialty) => ({
      value: specialty,
      label: SpecialtyDisplayLabels[specialty],
    }));
    this.yearsOfExperience = advocate.yearsOfExperience;
    this.imageUrl = advocate.imageUrl;
    this.gender = advocate.gender;
  }
}
