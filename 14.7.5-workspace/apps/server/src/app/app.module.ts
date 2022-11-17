import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import * as jsonServer from 'json-server';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    const router = jsonServer.router({
      users: [{ id: '123asd', firstName: 'Foo', lastName: 'Bar', age: 33 }],
    });
    const middlewares = jsonServer.defaults({});
    consumer.apply(...middlewares, router).forRoutes('/');
  }
}
