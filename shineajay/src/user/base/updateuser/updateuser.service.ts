import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { user, Prisma } from '@prisma/client';

@Injectable()
export class UpdateUserService {
    constructor(private prisma: PrismaService) {}
    
    async updateUser(params: {
        where: Prisma.userWhereUniqueInput;
        data: Prisma.userUpdateInput;
      }): Promise<user> {
        const { where, data } = params;
        return this.prisma.user.update({
          data,
          where,
        });
      }
      
}  