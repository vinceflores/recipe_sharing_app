import { RecipeForm } from "@/components/RecipeForm";

export default function SubmitRecipe() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submit a New Recipe</h1>
      <RecipeForm />
    </div>
  );
}
