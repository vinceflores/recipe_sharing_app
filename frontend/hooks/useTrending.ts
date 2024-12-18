"use client";
import { useState, useEffect } from "react";
import { getTrendingRecipes } from "../actions/getRecipes";
import { Recipe, RecipePreview } from "../lib/recipe.types";
import { recipesAdapter } from "../lib/recipe.adapter";

type FetchTrendingProps = {};

export const useTrending = (props: FetchTrendingProps) => {
  const [trending, setTrending] = useState<RecipePreview[] | null>(null);
  useEffect(() => {
    const getTrending = async () => {
      const data: Recipe[] = await getTrendingRecipes();
      setTrending((prev) => recipesAdapter(data));
    };
    getTrending();
  }, []);
  return { trending };
};
