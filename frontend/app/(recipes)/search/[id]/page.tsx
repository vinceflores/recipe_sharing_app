import { Search } from "../../../../actions/getRecipes"
import { RecipeList } from "../../../../components/RecipeList"

type SearchReultPageProps = {
    params: Promise<{ id: string }>
}

export default async function SearchReultPage(
    { params }: SearchReultPageProps
) {
    const query = (await params).id
    const recipes = await Search(query)
    if (!recipes) return (
        <div>
            Loading...
        </div>
    )

    return (
        <div className="space-y-4">
            <h1 className="capitalize text-4xl font-bold">Recipes for <i> {'"'} {query} {'"'} </i> </h1>
            <RecipeList recipes={recipes} />
        </div>
    )
}
