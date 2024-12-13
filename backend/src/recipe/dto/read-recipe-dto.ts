import { Comment, Image, Video } from '@prisma/client';

export class ReadRecipeDTO extends PageTransitionEvent {
  id: string;
  title: string;
  instruction: string;
  createdAt: Date;
  updatedAt: Date;

  comments: Comment;
  likes: number;
  images: Image[];
  video_url: Video[];
}
