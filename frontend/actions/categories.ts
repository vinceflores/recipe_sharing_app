"use server";

import { Category } from "../lib/recipe.types";

const base_url = "http://localhost:3001";

export async function findAllCategories() {
  const res = await fetch(base_url + "/category", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}
