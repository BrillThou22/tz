import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Password } from './passwords/password.model';
import { PasswordsModule } from './passwords/passwords.module';

@Module({
  imports: [
    /* Подтягиваю переменные окружения */
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),

    /* Подтягиваю TypeORM */
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB,
      entities: [Password],
      synchronize: true,
    }),

    /* Пароли */
    PasswordsModule,
  ],
})
export class AppModule {}
