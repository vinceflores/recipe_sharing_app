"use server";

const base_url = "http://localhost:3001";

export async function getRecipes(params: any) {}

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

export async function findOne(id: string) {
  const res = await fetch(base_url + "/recipe/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}
