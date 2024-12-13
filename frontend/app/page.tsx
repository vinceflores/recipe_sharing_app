"use client"
import { RecipeCard } from '@/components/RecipeCard'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRecents } from '../hooks/useRecents'
import { useTrending } from '../hooks/useTrending'

// Mock data for demonstration
const trendingRecipes = [
  { id: '1', title: "Spicy Thai Basil Chicken", author: "Chef Maria", views: 1500000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
  { id: '2', title: "Creamy Garlic Parmesan Pasta", author: "Pasta Master", views: 1200000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
  { id: '3', title: "Homemade Margherita Pizza", author: "Pizza Pro", views: 980000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
  { id: '4', title: "Chocolate Lava Cake", author: "Dessert Diva", views: 850000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
]

const recentRecipes = [
  { id: '5', title: "Vegan Buddha Bowl", author: "Green Gourmet", views: 50000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
  { id: '6', title: "Crispy Air Fryer Wings", author: "Crispy Cook", views: 75000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
  { id: '7', title: "Overnight Oats 3 Ways", author: "Breakfast Baron", views: 62000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
  { id: '8', title: "Homemade Sushi Rolls", author: "Sushi Sensei", views: 88000, thumbnail: "/placeholder.svg?height=200&width=300", authorAvatar: "/placeholder.svg?height=32&width=32" },
]

const categories = [
  { name: "Quick & Easy", icon: "🍳" },
  { name: "Vegetarian", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
  { name: "Healthy", icon: "🥑" },
  { name: "Comfort Food", icon: "🍲" },
  { name: "Baking", icon: "🍞" },
]

export default function Home() {
  const router = useRouter()
  const { recents } = useRecents({});
  const { trending } = useTrending({})
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trending?.map((recipe) => (
            <RecipeCard key={recipe.id} action={action} {...recipe} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recent Uploads</h2>
          <Button onClick={() => router.push("/recents")} variant="ghost" className="text-primary">
            See all <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recents?.map((recipe) => (
            <RecipeCard key={recipe.id} action={action}  {...recipe} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Button key={category.name} variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
              <span className="text-2xl mb-2">{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}

