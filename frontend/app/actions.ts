'use server'

import { revalidatePath } from 'next/cache'

// This is a simple in-memory storage. In a real app, you'd use a database.
let recipes: Array<{ id: string; title: string; ingredients: string; instructions: string; videoUrl: string; author: string }> = []

export async function addRecipe(formData: FormData) {
  const title = formData.get('title') as string
  const ingredients = formData.get('ingredients') as string
  const instructions = formData.get('instructions') as string
  const videoUrl = formData.get('videoUrl') as string
  const author = 'Current User' // In a real app, this would be the logged-in user

  if (!title || !ingredients || !instructions || !videoUrl) {
    return { error: 'All fields are required' }
  }

  const id = Date.now().toString() // Simple ID generation
  recipes.push({ id, title, ingredients, instructions, videoUrl, author })
  revalidatePath('/')
  revalidatePath('/profile')
  return { success: 'Recipe added successfully' }
}

export async function getRecipes() {
  return recipes
}

export async function getRecipesByAuthor(author: string) {
  return recipes.filter(recipe => recipe.author === author)
}

