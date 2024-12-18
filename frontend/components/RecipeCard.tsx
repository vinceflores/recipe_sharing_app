import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { getUser } from '../actions/user'
import { RecipePreview } from '../lib/recipe.types'
import { cn } from '../lib/utils'
import LikeButton from './LikeButton'

export type RecipeCardProps = {
  action: (id: string) => void
  className?: string
}

export function RecipeCard(props: RecipeCardProps & RecipePreview) {
  const {
    id,
    title,
    author,
    thumbnail,
    authorAvatar,
    action,
    likes
  } = props;

  const likeRecipe = async () => {
    // call server action
    const user = await getUser()
    if (!user) return
    fetch("http://localhost:3001/recipe/like_recipe", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id, userId: user.id
      })
    })
  }
  const likeHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    likeRecipe()
  }

  return (
    <Card
      onClick={() => action(id)}
      className={cn(
        props.className,
        "w-full cursor-pointer"
      )}>
      <CardContent className="flex flex-col p-0">
        <div className="relative aspect-video">
          <LikeButton onClick={likeHandler} />
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 flex ">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarImage src={authorAvatar} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold line-clamp-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{likes} likes</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

