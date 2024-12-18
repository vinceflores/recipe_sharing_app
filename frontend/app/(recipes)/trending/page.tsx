"use client"

import { useRouter } from "next/navigation";
import { useTrending } from "../../../hooks/useTrending"
import { RecipeCardMapped, RecipeList } from "../../../components/RecipeList";

export default function Trending() {
    const { trending } = useTrending({});
    const router = useRouter()
    const action = (id: string) => { router.push("/" + id) }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Trending</h2>
            <RecipeList
                render={<RecipeCardMapped action={action} recipes={trending} />}
            />
        </div>
    )
}