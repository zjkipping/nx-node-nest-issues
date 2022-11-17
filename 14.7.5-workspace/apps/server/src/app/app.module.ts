import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [AppController],
})
export class AppModule {}
