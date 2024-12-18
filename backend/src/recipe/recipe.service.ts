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
    // video_url: true,
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
        categories: categories?.length > 0 && {
          connect: categories.map((c) => ({
            id: c.id,
          })),
        },
      },
    });
    return recipe;
  }

  async findAll() {
    return await this.prisma.recipe.findMany({
      include: this.include,
    });
  }

  // TODO Extract to QueryRecipeService
  async findRecents() {
    return await this.prisma.recipe.findMany({
      include: this.include,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // TODO Extract to QueryRecipeService
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

  // TODO Extract to CategoryRecipeService
  async findAllByCategory(category: string) {
    // return 'by categories';
    return await this.prisma.recipe.findMany({
      where: {
        categories: {
          some: {
            name: {
              contains: category,
            },
          },
        },
      },
      include: this.include,
    });
  }

  // TODO extract to LikeRecipeService
  async findLiked(userId: string) {
    return await this.prisma.recipe.findMany({
      where: {
        likes: {
          some: {
            userId,
          },
        },
      },
      include: {
        user: true,
        likes: true,
        images: true,
        comments: true,
      },
    });
  }

  // TODO extract to LikeRecipeService
  async likeRecipe(id: string, userId: string) {
    let data = {};

    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
      select: {
        _count: {
          select: {
            likes: {
              where: { userId },
            },
          },
        },
      },
    });

    if (!recipe) return;

    if (recipe._count.likes == 0) {
      data = { likes: { create: { userId } } };
    } else {
      data = {
        likes: {
          delete: {
            userId_recipeId: {
              recipeId: id,
              userId,
            },
          },
        },
      };
    }
    return await this.prisma.recipe.update({
      data,
      where: { id },
    });
  }

  async search(query: string) {
    return await this.prisma.recipe.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { ingredients: { contains: query } },
          { instructions: { contains: query } },
          { user: { email: { contains: query } } },
          {
            categories: {
              some: {
                name: {
                  contains: query,
                },
              },
            },
          },
          {
            comments: {
              some: {
                comment: {
                  comment: { contains: query },
                },
              },
            },
          },
        ],
      },
      include: this.include,
    });
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return await this.prisma.recipe.update({
      where: { id },
      data: { ...updateRecipeDto },
    });
  }

  async remove(id: string) {
    return await this.prisma.recipe.delete({
      where: { id },
    });
  }
}
