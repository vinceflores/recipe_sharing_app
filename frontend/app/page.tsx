"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { RecipeCardMapped, RecipeList } from '../components/RecipeList'
import { useCategories } from '../hooks/useCategories'
import { useRecents } from '../hooks/useRecents'
import { useTrending } from '../hooks/useTrending'
import CategoryButton from "../components/CategoryButton"

export default function Home() {
  const router = useRouter()
  const { recents } = useRecents({});
  const { trending } = useTrending({})
  const { categoryOptions } = useCategories()
  const action = (id: string) => { router.push("/" + id) }

  return (
    <div className="space-y-8">
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Trending Recipes</h2>
          <Button onClick={() => router.push("/trending")} variant="ghost" className="text-primary">
            See all <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <RecipeList render={
          <RecipeCardMapped action={action} recipes={trending} />
        } />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recent Uploads</h2>
          <Button onClick={() => router.push("/recents")} variant="ghost" className="text-primary">
            See all <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <RecipeList render={
          <RecipeCardMapped action={action} recipes={recents} />
        } />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categoryOptions?.map((category) => (
            <CategoryButton key={category.name} category={category} />
          ))}
        </div>
      </section>
    </div>
  )
}

