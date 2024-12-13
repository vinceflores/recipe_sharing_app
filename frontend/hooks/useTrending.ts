"use client";
import { useState, useEffect } from "react";
import { getTrendingRecipes } from "../actions/getRecipes";
import { Recipe, RecipePreview } from "../lib/recipe.types";

type FetchTrendingProps = {};

export const useTrending = (props: FetchTrendingProps) => {
  const [trending, setTrending] = useState<RecipePreview[] | null>(null);
  useEffect(() => {
    const getTrending = async () => {
      const data: Recipe[] = await getTrendingRecipes();
      setTrending((prev) =>
        data.map((recipe: Recipe) => ({
          id: recipe.id,
          title: recipe.title,
          author: recipe.user.email,
          views: 0,
          thumbnail:
            recipe.images.length > 0 && recipe.images[0].url
              ? recipe.images[0].url
              : "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=",
          authorAvatar: "",
        }))
      );
    };
    getTrending();
  }, []);
  return { trending };
};
