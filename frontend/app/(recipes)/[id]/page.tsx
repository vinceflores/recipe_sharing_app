import { Recipe } from "@/lib/recipe.types"
import { findOne } from "@/actions/getRecipes"

async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const recipe = await findOne((await params).id)
  return (
    <div>{recipe?.title}</div>
  )
}

export default RecipePage