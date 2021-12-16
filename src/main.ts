import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function launch() {
  const PORT = process.env.PORT || 5000;

  // Политику cors в ТЗ отключаю, она здесь ни к чему.
  const APP = await NestFactory.create(AppModule, { cors: true });

  await APP.listen(PORT, () => {
    console.log(`Сервер стартовал успешно! Порт: ${PORT}.`);
  });
}

// Запуск сервера
launch();
