"use client"

import { useRouter } from "next/navigation"
import { RecipeCardMapped, RecipeList } from "@/components/RecipeList"
import { useRecents } from "@/hooks/useRecents"

function Recents() {
    const { recents } = useRecents({})
    const router = useRouter()
    const action = (id: string) => { router.push("/" + id) }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Uploads</h2>
            <RecipeList render={
                <RecipeCardMapped action={action} recipes={recents} />
            } />
        </div>
    )
}

export default Recents