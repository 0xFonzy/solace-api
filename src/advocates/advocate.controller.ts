import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AdvocateService } from './advocate.service';
import { Advocate } from './advocate.entity';

@Controller('advocates')
export class AdvocateController {
  constructor(private readonly advocatesService: AdvocateService) {}

  @Post()
  create(@Body() advocateData: Partial<Advocate>) {
    return this.advocatesService.create(advocateData);
  }

  @Get()
  findAll() {
    return this.advocatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advocatesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() advocateData: Partial<Advocate>) {
    return this.advocatesService.update(id, advocateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advocatesService.remove(id);
  }
}
