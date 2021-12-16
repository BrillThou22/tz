import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Password } from './password.model';

import { generate } from 'generate-password';

@Injectable()
export class PasswordsService {
  constructor(
    @InjectRepository(Password)
    private passwordsRepository: Repository<Password>,
  ) {}

  async createPassword(): Promise<Object> {
    // Генерирую пароль
    const password = generate({
      length: 32,
      numbers: true,
    });

    // Создаю сущность
    const gen_pass = this.passwordsRepository.create({
      password: password,
      // Мне пришлось преобразовать в строку.
      // Необходимо указать всё время в миллисекундах, а Postgres не воспринимает настолько большое число
      // в типе integer
      date: String(Date.now()),
    });

    // Сохраняю пароль
    await this.passwordsRepository.save(gen_pass);

    // Возвращаю на фронт
    return { password };
  }

  async getPasswords(): Promise<Password[]> {
    // Кидаю все пароли из БД на фронт
    return this.passwordsRepository.find();
  }
}
