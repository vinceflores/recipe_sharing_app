"use server";

import { auth } from "@clerk/nextjs/server";

const base_url = "http://localhost:3001";
export async function getUser() {
  const { userId } = await auth();
  if (!userId) return null;

  const userRes = await fetch(base_url + "/user/" + userId, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await userRes.json();
}
