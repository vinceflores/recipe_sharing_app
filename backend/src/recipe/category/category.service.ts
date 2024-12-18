import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCategoryDTO } from './dto/create-category-dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
  async createMany(data: CreateCategoryDTO) {
    if (!data.categories) return null;
    return await this.prisma.category.createMany({
      data: data.categories.map((category) => ({
        ...category,
      })),
    });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }
}
