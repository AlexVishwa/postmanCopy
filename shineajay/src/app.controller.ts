import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Req
} from '@nestjs/common';
import { AddUserService } from './user/base/adduser/adduser.service';
import { user as UserModel } from '@prisma/client';// Collection and API as CollectionModel and API model
import { Collection as CollectionModel } from '@prisma/client';
import { UpdateUserService } from './user/base/updateuser/updateuser.service';
import { AllCollectionsService } from './user/base/all-collections/all-collections.service';
import { Request, response } from 'express';
import * as session from 'express-session';
import { Cookie } from 'express-session';
@Controller()
export class AppController {
  constructor(
    private readonly AddUserService: AddUserService,
    private readonly UpdateUserService: UpdateUserService,
    private readonly AllCollectionsService: AllCollectionsService,

  ) {}
  @Get()
  findAll(@Req() request: Request) {
    //const visits = request.session.get('visits');
   // request.session.visits= request.session.visits ? request.session.visits + 1 : 1;
   // response.send(request.session.visits).status(200);
  }
/*
  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Get('collections')
  async getCollections(): Promise<CollectionModel[]> {
    return this.AllCollectionsService.collections({//collection or collections
    });
  }

  @Get('filtered-collections/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<CollectionModel[]> {
    return this.ParticularCollectionService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('collection')
  async createDraft(
    @Body() postData: { name: string; userId:  },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }
*/
  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string;password: string }
  ): Promise<UserModel> {
  //  request.session.UserId=((await this.AddUserService.createUser(userData)).id);
    return this.AddUserService.createUser(userData);
  }
/*
  @Put('user/:id')
  async userPost(@Param('id') id: string,@Body() userData:{name?: string; email?: string;}): Promise<UserModel> {
    return this.UpdateUserService.updateUser({
      where: { id: Number(id) },
      data: {   },
    });
  }
/*
  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
  */
}