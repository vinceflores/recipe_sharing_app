import Link from 'next/link'
import { Home, Utensils, Clock, ThumbsUp, PlusCircle, User } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 h-full bg-background border-r flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary">RecipeTube</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-2">
          <SidebarItem href="/" icon={<Home className="mr-2" />}>Home</SidebarItem>
          <SidebarItem href="/trending" icon={<Utensils className="mr-2" />}>Trending</SidebarItem>
          <SidebarItem href="/recent" icon={<Clock className="mr-2" />}>Recent</SidebarItem>
          <SidebarItem href="/liked" icon={<ThumbsUp className="mr-2" />}>Liked</SidebarItem>
          <SidebarItem href="/submit" icon={<PlusCircle className="mr-2" />}>Submit Recipe</SidebarItem>
          <SidebarItem href="/profile" icon={<User className="mr-2" />}>My Profile</SidebarItem>
        </ul>
      </nav>
    </div>
  )
}

function SidebarItem({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="flex items-center p-2 rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground">
        {icon}
        <span>{children}</span>
      </Link>
    </li>
  )
}

