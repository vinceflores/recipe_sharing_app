import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [PrismaModule],
  controllers: [RecipeController, CategoryController],
  providers: [RecipeService, PrismaService, CategoryService],
})
export class RecipeModule {}
