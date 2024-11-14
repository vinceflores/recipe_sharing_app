import { Prisma } from '@prisma/client';
export class CreateRecipeDto {
  id?: string;
  name: string;
  description: string;
  images?: string[] | File[];
  video_url?: string[] | File[];
}
