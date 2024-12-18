import { RecipeForm } from "@/components/RecipeForm";
import { currentUser } from "@clerk/nextjs/server";

export default async function SubmitRecipe() {
  const user = await currentUser()
  if (!user) return <div>Not Signed In </div>
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submit a New Recipe</h1>
      <RecipeForm />
    </div>
  );
}
