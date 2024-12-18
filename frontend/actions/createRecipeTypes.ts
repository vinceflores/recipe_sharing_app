import { z } from "zod";
export const RecipeSchema = z.object({
  title: z.string().min(2),
  instructions: z.string(),
  ingredients: z.string(),
  categories: z.array(
    z.object({
      id: z.string(),
    })
  ),
  images: z.string().array(),
});

export const defaultValues = {
  categories: [],
  images: [""],
  ingredients: "",
  instructions: "",
  title: "",
};
