import { Injectable } from '@nestjs/common';
//const db= require('../config/db');
//const mysqlCon = require('mysql');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(){
  }
}
