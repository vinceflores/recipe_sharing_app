import { getRecipesByAuthor } from '../actions'
import { RecipeCard } from '@/components/RecipeCard'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default async function Profile() {
  const author = 'Current User' // In a real app, this would be the logged-in user
  const recipes = await getRecipesByAuthor(author)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center space-x-4 mb-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt={author} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{author}</h1>
          <p className="text-muted-foreground">Passionate food lover and recipe creator</p>
          <div className="flex space-x-2 mt-2">
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">My Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            author={recipe.author}
            views={Math.floor(Math.random() * 10000)} // Random view count for demonstration
            thumbnail="/placeholder.svg?height=200&width=300"
            authorAvatar="/placeholder.svg?height=32&width=32"
          />
        ))}
      </div>
    </div>
  )
}

