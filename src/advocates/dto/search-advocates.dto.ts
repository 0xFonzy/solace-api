import { IsOptional, IsEnum, IsArray, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { City } from '../constants/city.constants';
import { Specialty } from '../constants/specialty.constants';

export class SearchAdvocatesDto {
  @ApiPropertyOptional({ enum: City })
  @IsOptional()
  @IsEnum(City)
  city?: City;

  @ApiPropertyOptional({ type: [String], enum: Specialty, isArray: true })
  @IsOptional()
  @IsArray()
  @IsEnum(Specialty, { each: true })
  specialties?: Specialty[];

  @ApiPropertyOptional({
    description: 'Search by advocate name (partial match)',
  })
  @IsOptional()
  @IsString()
  name?: string;
}
