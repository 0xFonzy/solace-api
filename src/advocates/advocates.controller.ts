import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdvocatesService } from './advocates.service';
import { Advocate } from './advocate.entity';
import { City } from './constants/city.constants';
import { Specialty } from './constants/specialty.constants';

@ApiTags('Advocates')
@Controller('advocates')
export class AdvocatesController {
  constructor(private readonly advocatesService: AdvocatesService) {}

  @Get()
  @ApiOperation({
    summary: 'Search advocates by city, specialties, and/or name',
  })
  @ApiResponse({
    status: 200,
    description: 'List of advocates matching the search criteria',
    type: [Advocate],
  })
  async searchAdvocates(
    @Query('name') name?: string,
    @Query('city') city?: City,
    @Query('specialties', {
      transform: (value: string | string[]) =>
        (Array.isArray(value) ? value : [value]).filter(Boolean),
    })
    specialties?: Specialty[],
  ): Promise<Advocate[]> {
    try {
      return this.advocatesService.searchAdvocates({
        city,
        specialties,
        name,
      });
    } catch (error) {
      console.error('Search Advocates Error: ', error);
      throw new BadRequestException('Invalid request');
    }
  }
}
