import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageModule } from './image/image.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configureDatabase from './config/database';
import configureStorage from './config/storage';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
      load: [configureDatabase, configureStorage],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseConfig = configService.getOrThrow('database');

        return {
          type: 'postgres',
          host: databaseConfig.host,
          port: databaseConfig.port,
          username: databaseConfig.username,
          password: databaseConfig.password,
          database: databaseConfig.database,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: databaseConfig.synchronize,
          logging: databaseConfig.logging,
        };
      },
    }),
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
