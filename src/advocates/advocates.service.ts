import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ArrayOverlap, FindOptionsWhere } from 'typeorm';
import { Advocate } from './advocate.entity';
import { SearchAdvocatesDto } from './dto/search-advocates.dto';

@Injectable()
export class AdvocatesService {
  constructor(
    @InjectRepository(Advocate)
    private advocatesRepository: Repository<Advocate>,
  ) {}

  async searchAdvocates(searchDto: SearchAdvocatesDto): Promise<Advocate[]> {
    const { city, specialties } = searchDto;

    const option: FindOptionsWhere<Advocate> = {};

    if (city) {
      option.city = city;
    }

    if (specialties && specialties.length > 0) {
      option.specialties = ArrayOverlap(specialties);
    }

    return this.advocatesRepository.find({
      where: option,
    });
  }
}
