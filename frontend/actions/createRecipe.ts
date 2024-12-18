"use server";

import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { RecipeSchema } from "./createRecipeTypes";
import { getUser } from "./user";

const base_url = "http://localhost:3001";

export async function createRecipe(recipe: z.infer<typeof RecipeSchema>) {
  const { userId } = await auth();
  if (!userId) return;

  // const userRes = await fetch(base_url + "/user/" + userId, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // });
  // const user = await userRes.json();
  const user = await getUser();
  // console.log(user);
  if (user && user.id) {
    const res = await fetch(base_url + "/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...recipe,
        video_url: [""],
        userId: user.id,
      }),
    });
  }
}
