import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import express from 'express';

//const app = express(); 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
/*
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }),
);
*/
bootstrap();
//Add swagger 