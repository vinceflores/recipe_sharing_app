import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Response } from 'express';
@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
    const images = createRecipeDto.images;
    const videos = createRecipeDto.video_url;

    // insert transaction

    return 'This action adds a new recipe';
  }

  findAll() {
    return `This action returns all recipe`;
  }

  async findOne(id: string): Promise<CreateRecipeDto> {
    const recipe = await this.prisma.recipe.findFirst({
      where: { id },
    });
    return recipe;
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  async remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
