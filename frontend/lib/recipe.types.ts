type WithRecipeId = { recipeId: string };
type WithUserId = { userId: string };
type WithId = { id: string };

export type RecipePreview = {
  id: string;
  title: string;
  author: string;
  views: number;
  thumbnail: string;
  authorAvatar: string;
};

export type Recipe = {
  title: string;
  ingredients: string;
  instructions: string;
  createdAt: Date;
  updateedAt: Date;

  categories: Category[];
  images: Image[];
  video_url: Video[];
  likes: Likes[];
  comments: Comments[];
  user: User;
} & WithId &
  WithUserId;

export type User = WithId & { email: string };

type Media = { url: string; name: string } & WithId;
export type Image = Media & WithRecipeId & { format: string };
export type Video = Media & WithRecipeId & {};

export type Category = { name: string } & WithId;
export type Comments = {} & WithId & WithUserId;
export type Likes = { userId: string; recipeId: string };
