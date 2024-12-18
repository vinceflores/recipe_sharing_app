"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUploadThing } from "../utils/uploadthing";
import { MultiSelectCategories } from "./ComboBoxExample";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createRecipe } from '../actions/createRecipe';
import { RecipeSchema, defaultValues } from "../actions/createRecipeTypes";
import { useCategories } from "../hooks/useCategories";
import { Label } from "./ui/label";
import { MultiUploader } from "./uploadthing/example-custom-uploader";

export function RecipeForm() {
  // const { toast } = useToast();
  // const [isPending, setIsPending] = useState(false);
  const [categories, setCategories] = useState<string[]>([])
  const { categoryOptions } = useCategories()
  const [files, setFiles] = useState<File[]>([]);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => { },
    onUploadError: () => {
      // alert("error occurred while uploading");
    },
    onUploadBegin: () => {
      // console.log("upload has begun for", file);
    },
  });

  const submitImages = async () => {
    if (files.length > 0) {
      const data = await startUpload(files)
      if (data) {
        const mp = data.map(d => d.appUrl)
        return mp
      }
      return []
    }
  }

  const form = useForm<z.infer<typeof RecipeSchema>>({
    resolver: zodResolver(RecipeSchema), defaultValues
  })

  async function onSubmit(values: z.infer<typeof RecipeSchema>) {
    const cats = categoryOptions.filter(o => categories.find(c => c.split(" ")[1] === o.name && c.split(" ")[0] === o.icon))
    const catsIdOnly = cats.map(c => ({ id: c.id as string }))
    try {
      const images = await submitImages();
      if (images && images.length > 0) {
        const data = { ...values, images: images as string[], categories: catsIdOnly }
        await createRecipe(data)
      }
    } catch (error) {
      console.log(error)
      // alert(error)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Taco, Pizza" {...field} />
                </FormControl>
                <FormDescription> Give the recipe a titile </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <MultiUploader files={files} setFiles={setFiles} submit={submitImages} />
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea placeholder="Instructions" {...field} />
                </FormControl>
                <FormDescription> How to cook </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ingredients"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingredients</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ingredients" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Label>Select Categories</Label>
            <MultiSelectCategories options={categoryOptions} value={categories} setValue={setCategories} />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div >
  );
}
