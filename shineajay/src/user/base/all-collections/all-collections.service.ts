import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { Collection, Prisma } from '@prisma/client';
@Injectable()
export class AllCollectionsService {
    constructor(private prisma: PrismaService){

    }
    
  async collections(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CollectionWhereUniqueInput;
    where?: Prisma.CollectionWhereInput;
    orderBy?: Prisma.CollectionOrderByWithRelationInput;
  }): Promise<Collection[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.collection.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
