import { findOne } from "@/actions/getRecipes"
import { ThumbsUp } from "lucide-react"
import Image from "next/image"
import { RecipeListByCategory } from "../../../components/RecipeList"

async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const recipe = await findOne((await params).id)
  if (!recipe) return <div>Loading</div>
  return (
    <div className="space-y-4">
      <Image
        src={recipe.images[0].url}
        alt={recipe.title}
        width={100}
        height={100}
        className="w-full h-[400px]  object-cover aspect-video"
      />
      <h1 className="text-4xl font-bold">{recipe?.title}</h1>
      <div className="flex flex-wrap gap-4">
        {
          recipe.categories.map(c => (
            <p key={c.name}>#{c.name}</p>
          ))
        }
      </div>
      <div className="flex items-center space-x-2 pb-4">
        <div className="flex items-center space-x-2 bg-gray-300 rounded-full py-2 px-4">
          <ThumbsUp className="w-8 cursor-pointer" />
          <span className="">{recipe.likes?.length} </span>
        </div>
      </div>
      <h3 className="text-2xl font-medium">Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3 className="text-2xl font-medium">Instructions</h3>
      <p>{recipe.instructions}</p>
      <div>
        {
          recipe.categories.map(c => (
            // <h1 key={c.name} className="font-bold text-4xl"> More {c.icon} {c.name} Recipes  </h1>
            <RecipeListByCategory key={c.name} category={c.name} />

          ))
        }
        <h1 className="font-bold text-4xl">Recomended</h1>
      </div>
    </div>
  )
}

export default RecipePage