'use client'

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background border-b p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1 max-w-xl">
          <form className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search recipes" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}

