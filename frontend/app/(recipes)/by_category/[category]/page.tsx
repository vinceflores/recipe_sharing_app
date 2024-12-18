import { findByCategory } from "@/actions/getRecipes"
import { RecipeList } from "../../../../components/RecipeList"

async function RecipeByCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = (await params)
    const recipes = await findByCategory(category)

    if (!recipes) {
        return (
            <div>No Recipes Found</div>
        )
    }

    return (
        <div className="space-y-2">
            <h2 className="font-bold text-3xl">{category} Recipes</h2>
            <RecipeList recipes={recipes} />
        </div >
    )
}

export default RecipeByCategoryPage