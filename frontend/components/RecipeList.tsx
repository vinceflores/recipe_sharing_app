import { getRecipes } from "@/actions/getRecipes";

export async function RecipeList() {
  const recipes = await getRecipes();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Be the first to add one!</p>
      ) : (
        <ul className="space-y-4">
          {recipes.map((recipe, index) => (
            <li key={index} className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <h4 className="font-medium mt-2">Ingredients:</h4>
              <p className="whitespace-pre-line">{recipe.ingredients}</p>
              <h4 className="font-medium mt-2">Instructions:</h4>
              <p className="whitespace-pre-line">{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
