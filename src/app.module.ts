import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advocate } from './advocates/advocate.entity';
import { AdvocatesController } from './advocates/advocates.controller';
import { AdvocatesService } from './advocates/advocates.service';
import { FiltersModule } from './filters/filters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([Advocate]),
    FiltersModule,
  ],
  controllers: [AppController, AdvocatesController],
  providers: [AppService, AdvocatesService],
})
export class AppModule {}
