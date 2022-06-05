import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AddUserService } from './user/base/adduser/adduser.service';
import { PrismaService } from './prisma.service';
import { UpdateUserService } from './user/base/updateuser/updateuser.service';
import { AllCollectionsService } from './user/base/all-collections/all-collections.service';
import { CreateCollectionsService } from './user/base/create-collections/create-collections.service';
@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, AddUserService, PrismaService, UpdateUserService, AllCollectionsService, CreateCollectionsService],
})
export class AppModule {}
