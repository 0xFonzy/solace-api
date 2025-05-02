import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advocate } from './advocate.entity';
import { AdvocateService } from './advocate.service';
import { AdvocateController } from './advocate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Advocate])],
  providers: [AdvocateService],
  controllers: [AdvocateController],
  exports: [AdvocateService],
})
export class AdvocateModule {}
