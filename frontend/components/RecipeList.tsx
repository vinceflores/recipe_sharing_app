"use client"
import { useRouter } from "next/navigation";
import { RecipePreview } from "../lib/recipe.types";
import { cn } from "../lib/utils";
import { RecipeCard, RecipeCardProps } from "./RecipeCard";
import Grid from '@/components/layout/Grid'
import { useRecipeByCategory } from "../hooks/useRecipeByCateogry";
type RecipeListProps = {
  render?: React.ReactNode
  recipes?: RecipePreview[]
} & React.PropsWithChildren

export function RecipeList(props: RecipeListProps) {
  const router = useRouter()
  if (props.recipes && props.recipes?.length > 0) {
    return (
      <Grid>
        <RecipeCardMapped action={(id: string) => router.push("/" + id)} recipes={props.recipes} />
      </Grid>
    )
  }

  return (
    <Grid className="mt-8">{props.render}</Grid>
  );
}

export const RecipeCardMapped: React.FC<
  RecipeCardProps & { recipes: RecipePreview[] | null }
> = (props) => {
  const { recipes, action, className } = props
  return (
    <>
      {
        !recipes ? <div>Loading</div> :
          recipes?.map((recipe) => (
            <RecipeCard className={cn(className, " ")} key={recipe.id} action={action} {...recipe} />
          ))
      }
    </>
  )
}

type RecipeListByCategoryProps = {
  category: string
}
export const RecipeListByCategory: React.FC<RecipeListByCategoryProps> = (props) => {
  const { recipes } = useRecipeByCategory(props.category)
  if (!recipes) return <div>Loading ...</div>
  return (
    <div className="space-y-3">
      <h1 className="font-bold text-4xl"> More {props.category} Recipes  </h1>
      <RecipeList recipes={recipes!} />
    </div>
  )
}
