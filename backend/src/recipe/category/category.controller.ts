import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category-dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createMany(@Body() body: CreateCategoryDTO) {
    return this.categoryService.createMany(body);
  }

  @Get()
  async findAll(){
    return this.categoryService.findAll()
  }
}
