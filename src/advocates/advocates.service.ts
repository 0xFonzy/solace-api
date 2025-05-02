import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ArrayOverlap, FindOptionsWhere, ILike } from 'typeorm';
import { Advocate } from './advocate.entity';
import { SearchAdvocatesDto } from './dto/search-advocates.dto';

@Injectable()
export class AdvocatesService {
  constructor(
    @InjectRepository(Advocate)
    private advocatesRepository: Repository<Advocate>,
  ) {}

  async searchAdvocates(searchDto: SearchAdvocatesDto): Promise<Advocate[]> {
    const { city, specialties, name } = searchDto;

    const baseWhere: FindOptionsWhere<Advocate> = {};

    if (city) {
      baseWhere.city = city;
    }

    if (specialties && specialties.length > 0) {
      baseWhere.specialties = ArrayOverlap(specialties);
    }

    // If we have a name search, we need to use OR condition between firstName and lastName
    if (name) {
      return this.advocatesRepository.find({
        where: [
          { ...baseWhere, firstName: ILike(`%${name}%`) },
          { ...baseWhere, lastName: ILike(`%${name}%`) },
        ],
      });
    }

    // If no name search, use the base where clause
    return this.advocatesRepository.find({
      where: baseWhere,
    });
  }
}
