import { Controller, Get, Post } from '@nestjs/common';
import { PasswordsService } from './passwords.service';

@Controller('passwords')
export class PasswordsController {
  constructor(private readonly passwordsService: PasswordsService) {}

  @Post()
  async createPasswords() {
    return await this.passwordsService.createPassword();
  }

  @Get()
  async getPasswords() {
    return await this.passwordsService.getPasswords();
  }
}
