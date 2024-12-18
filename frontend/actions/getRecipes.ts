"use server";

import { recipesAdapter } from "../lib/recipe.adapter";
import { Recipe } from "../lib/recipe.types";
import { getUser } from "./user";

const base_url = "http://localhost:3001";

export async function getLiked() {
  const user = await getUser();
  if (!user) return null;

  const res = await fetch(base_url + "/recipe/likes/" + user.id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return recipesAdapter(data);
}

export async function getRecentUploads() {
  const res = await fetch(base_url + "/recipe/recents", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}

export async function getTrendingRecipes() {
  const res = await fetch(base_url + "/recipe/trending", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}

export async function findOne(id: string): Promise<Recipe> {
  const res = await fetch(base_url + "/recipe/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}

export async function findByCategory(category: string) {
  const res = await fetch(base_url + "/recipe/by_category/" + category, {
    method: "GET",
    headers: {
      "Content-Type": "appplication/json",
    },
  });

  const data = await res.json();
  const parsed = recipesAdapter(data);
  return parsed;
}

export async function Search(query: string) {
  const res = await fetch(base_url + "/recipe/search?query=" + query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (data) {
    return recipesAdapter(data);
  }
  return null;
}
