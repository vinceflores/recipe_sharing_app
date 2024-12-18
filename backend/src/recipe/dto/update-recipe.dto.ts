import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';
import { Recipe } from '../entities/recipe.entity';

export class UpdateRecipeDto extends PartialType(Recipe) {}
