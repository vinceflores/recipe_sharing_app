import { Category } from '@prisma/client';
export class CreateRecipeDto {
  id?: string;
  title: string;
  ingredients: string;
  instructions: string;

  userId: string;
  categories: Category[];

  images: string[];
  video_url?: string[];
}
