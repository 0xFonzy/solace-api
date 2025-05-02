import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

const getDatabaseConfig = (): DataSourceOptions => {
  // Check if we have a DATABASE_URL (Heroku) or use individual config vars
  const databaseUrl = configService.get<string>('DATABASE_URL');
  console.log('databaseUrl', databaseUrl);

  const baseConfig = {
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
    migrationsRun: true,
    synchronize: false,
  };

  if (databaseUrl) {
    console.log('returning databaseUrl...');
    return {
      type: 'postgres',
      url: databaseUrl,
      ssl: {
        rejectUnauthorized: false, // Required for Heroku
      },
      ...baseConfig,
    } as DataSourceOptions;
  }

  console.log('returning baseConfig...');

  return {
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    ...baseConfig,
  } as DataSourceOptions;
};

export default new DataSource(getDatabaseConfig());
