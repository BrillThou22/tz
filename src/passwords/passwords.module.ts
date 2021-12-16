import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PasswordsController } from './passwords.controller';
import { PasswordsService } from './passwords.service';

import { Password } from './password.model';

@Module({
  imports: [TypeOrmModule.forFeature([Password])],
  controllers: [PasswordsController],
  providers: [PasswordsService],
})
export class PasswordsModule {}
