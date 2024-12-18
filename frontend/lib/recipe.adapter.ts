import { Recipe, RecipePreview } from "./recipe.types";

export function recipesAdapter(recipes: Recipe[]): RecipePreview[] | [] {
  return recipes.map((recipe: Recipe) => ({
    id: recipe.id,
    title: recipe.title,
    author: recipe?.user?.email || "",
    views: 0,
    likes: recipe.likes?.length || 0,
    thumbnail:
      recipe.images.length > 0 && recipe.images[0].url
        ? recipe.images[0].url
        : "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=",
    authorAvatar: "",
  }));
}
export function recipeAdapter(recipe: Recipe): RecipePreview | null {
  if (!recipe) return null;
  return {
    id: recipe.id,
    title: recipe.title,
    author: recipe?.user?.email || "",
    views: 0,
    likes: recipe.likes?.length || 0,
    thumbnail:
      recipe.images.length > 0 && recipe.images[0].url
        ? recipe.images[0].url
        : "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=",
    authorAvatar: "",
  };
}
