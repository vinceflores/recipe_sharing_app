"use client";

import { useEffect, useState } from "react";
import { RecipeCardMapped } from "../components/RecipeList";
import { RecipePreview } from "../lib/recipe.types";
import { findByCategory } from "../actions/getRecipes";

export const useRecipeByCategory = (category: string) => {
  const [recipes, setRecipes] = useState<RecipePreview[] | null>();
  useEffect(() => {
    const get = async () => {
      const data = await findByCategory(category);
      setRecipes((prev) => data);
    };
    get();
  }, []);

  return { recipes };
};
