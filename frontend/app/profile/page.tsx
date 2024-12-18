import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { currentUser } from '@clerk/nextjs/server'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { getUser } from '../../actions/user'
import { RecipeList } from '../../components/RecipeList'
import { recipesAdapter } from '../../lib/recipe.adapter'

export default async function Profile() {
  const user = await currentUser()
  if (!user) return <div>Not signed in</div>

  const u = await getUser()
  if (!u) return <div>Not signed in </div>

  const author = user.emailAddresses[0].emailAddress || 'Current User' // In a real app, this would be the logged-in user
  const imageUrl = user.imageUrl
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center space-x-4 mb-8 pb-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src={imageUrl as string || "/placeholder.svg?height=96&width=96"} alt={author} />
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
      <RecipeList recipes={recipesAdapter(u.recipe)} />
    </div>
  )
}

