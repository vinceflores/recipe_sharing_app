"use client";

import { useState } from "react";
import { addRecipe } from "@/actions/addRecipe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../hooks/use-toast";

export function RecipeForm() {
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await addRecipe(formData);
    setIsPending(false);

    if (result.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    } else if (result.success) {
      toast({
        title: "Success",
        description: result.success,
      });
      // Reset the form
      const form = document.getElementById("recipe-form") as HTMLFormElement;
      form.reset();
    }
  }

  return (
    <form id="recipe-form" action={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Recipe Title
        </label>
        <Input type="text" id="title" name="title" required className="mt-1" />
      </div>
      <div>
        <label
          htmlFor="ingredients"
          className="block text-sm font-medium text-gray-700"
        >
          Ingredients
        </label>
        <Textarea
          id="ingredients"
          name="ingredients"
          required
          className="mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="instructions"
          className="block text-sm font-medium text-gray-700"
        >
          Instructions
        </label>
        <Textarea
          id="instructions"
          name="instructions"
          required
          className="mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="videoUrl"
          className="block text-sm font-medium text-gray-700"
        >
          Video URL
        </label>
        <Input
          type="url"
          id="videoUrl"
          name="videoUrl"
          required
          className="mt-1"
        />
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit Recipe"}
      </Button>
    </form>
  );
}
