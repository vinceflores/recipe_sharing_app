import React from 'react'
import { Category } from '../lib/recipe.types'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export type CategoryButtonProps = {
    category: Category
}
function CategoryButton(props: CategoryButtonProps) {
    const router = useRouter()
    const { category } = props
    return (
        <Button onClick={() => router.push("/by_category/" + category.name)} key={category.name} variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
            <span className="text-2xl mb-2">{category.icon}</span>
            <span>{category.name}</span>
        </Button>
    )
}

export default CategoryButton