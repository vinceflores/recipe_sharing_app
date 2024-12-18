"use client";
import { useEffect, useState } from "react";
import { Category } from "../lib/recipe.types";
import { findAllCategories } from "../actions/categories";

export const useCategories = () => {
  const [categoryOptions, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const data = await findAllCategories();
      if (data && data.length > 0) {
        setCategories(data);
      }
    };
    getCategories();
  }, []);
  return { categoryOptions };
};
