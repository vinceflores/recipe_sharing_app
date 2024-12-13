import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface RecipeCardProps {
  id: string
  title: string
  author: string
  views: number
  thumbnail: string
  authorAvatar: string
  action: (id: string) => void
}

export function RecipeCard(props: RecipeCardProps) {
  const {
    id,
    title,
    author,
    views,
    thumbnail,
    authorAvatar,
    action
  } = props;

  return (
    <Card onClick={() => action(id)} className="w-full cursor-pointer">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 flex">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarImage src={authorAvatar} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold line-clamp-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{views} views</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

