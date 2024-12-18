"use client";
import { useState, useEffect } from "react";
import { getRecentUploads } from "../actions/getRecipes";
import { Recipe, RecipePreview } from "../lib/recipe.types";
import { recipesAdapter } from "../lib/recipe.adapter";

type FetchRecentsProps = {};

export const useRecents = (props: FetchRecentsProps) => {
  const [recents, setRecents] = useState<RecipePreview[] | null>(null);
  useEffect(() => {
    const getRecentts = async () => {
      const data: Recipe[] = await getRecentUploads();
      setRecents((prev) => recipesAdapter(data));
    };
    getRecentts();
  }, []);
  return { recents };
};
