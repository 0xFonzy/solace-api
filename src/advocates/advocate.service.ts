import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advocate } from './advocate.entity';

@Injectable()
export class AdvocateService {
  constructor(
    @InjectRepository(Advocate)
    private advocatesRepository: Repository<Advocate>,
  ) {}

  async create(data: Partial<Advocate>): Promise<Advocate> {
    const advocate = this.advocatesRepository.create(data);
    return await this.advocatesRepository.save(advocate);
  }

  async findAll(): Promise<Advocate[]> {
    return await this.advocatesRepository.find();
  }

  async findOne(id: string): Promise<Advocate | null> {
    return await this.advocatesRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<Advocate>): Promise<Advocate | null> {
    await this.advocatesRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.advocatesRepository.delete(id);
  }
}
