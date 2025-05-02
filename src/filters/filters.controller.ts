import { Controller, Get } from '@nestjs/common';
import { FiltersService, FiltersResponse } from './filters.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Filters')
@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all available filters for advocates' })
  @ApiResponse({
    status: 200,
    description:
      'Lists of all cities and specialties with their display labels',
    type: FiltersResponse,
  })
  getFilters(): FiltersResponse {
    return this.filtersService.getFilters();
  }
}
