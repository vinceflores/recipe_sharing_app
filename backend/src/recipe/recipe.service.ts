import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class RecipeService {
  include: Prisma.RecipeInclude = {
    user: {
      select: { id: true, email: true },
    },
    images: true,
    video_url: true,
    categories: true,
    likes: true,
    comments: true,
  };

  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRecipeDto) {
    const images = dto.images;
    const videos = dto.video_url;
    const categories: Category[] = dto.categories;

    const recipe = await this.prisma.recipe.create({
      data: {
        userId: dto.userId,
        title: dto.title,
        ingredients: dto.ingredients,
        instructions: dto.instructions,
        images: images?.length > 0 && {
          create: dto.images.map((img) => ({
            url: img,
            name: '',
            format: '',
          })),
        },
        video_url: videos.length > 0 && {
          create: videos.map((vid) => ({
            url: vid,
            name: '',
          })),
        },
        categories: categories?.length > 0 && {
          connect: categories.map((c) => ({
            id: c.id,
          })),
        },
      },
      include: this.include,
    });
  }

  async findAll() {
    return await this.prisma.recipe.findMany({
      include: this.include,
    });
  }

  async findRecents() {
    return await this.prisma.recipe.findMany({
      include: this.include,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findTrending() {
    return await this.prisma.recipe.findMany({
      include: {
        ...this.include,
        _count: {
          select: {
            likes: true,
          },
        },
      },
      orderBy: {
        likes: {
          _count: 'desc',
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.recipe.findFirst({
      where: { id },
      include: this.include,
    });
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return await this.prisma.recipe.update({
      where: { id },
      data: {
        userId: id,
        ingredients: updateRecipeDto.ingredients,
        instructions: updateRecipeDto.instructions,
        title: updateRecipeDto.title,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.recipe.delete({
      where: { id },
    });
  }
}
