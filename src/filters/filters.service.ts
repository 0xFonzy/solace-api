import { Injectable } from '@nestjs/common';
import { City, CityDisplayLabels } from '../advocates/constants/city.constants';
import {
  Specialty,
  SpecialtyDisplayLabels,
} from '../advocates/constants/specialty.constants';
import { ApiProperty } from '@nestjs/swagger';

class FilterItem {
  @ApiProperty()
  value: string;

  @ApiProperty()
  label: string;
}

export class FiltersResponse {
  @ApiProperty({ type: [FilterItem] })
  cities: FilterItem[];

  @ApiProperty({ type: [FilterItem] })
  specialties: FilterItem[];
}

@Injectable()
export class FiltersService {
  getFilters(): FiltersResponse {
    return {
      cities: Object.values(City).map((city) => ({
        value: city,
        label: CityDisplayLabels[city],
      })),
      specialties: Object.values(Specialty).map((specialty) => ({
        value: specialty,
        label: SpecialtyDisplayLabels[specialty],
      })),
    };
  }
}
