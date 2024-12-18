import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @Get()
  async findAll() {
    return await this.recipeService.findAll();
  }

  @Get('/recents')
  findRecents() {
    return this.recipeService.findRecents();
  }

  @Get('/trending')
  async findAllTrending() {
    return await this.recipeService.findTrending();
  }

  @Get('/likes/:userId')
  async findAllLiked(@Param('userId') userId: string) {
    /**
     * Returns the liked recipes for a user
     * identified by userId
     */
    return await this.recipeService.findLiked(userId);
  }

  @Put('/like_recipe')
  async likeRecipe(@Body() body: { id: string; userId: string }) {
    return await this.recipeService.likeRecipe(body.id, body.userId);
  }

  @Get('/by_category/:category')
  async findAllByCategory(@Param('category') category: string) {
    return await this.recipeService.findAllByCategory(category);
  }

  @Get('/search')
  async search(@Query() searchDto: { query?: string }) {
    const { query } = searchDto;
    return this.recipeService.search(query);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(id, updateRecipeDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.recipeService.remove(id);
  }
}
