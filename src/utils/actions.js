"use server";

import { base_url } from "@/base_url";

// Server-side data fetching function
export async function fetchHotels() {
  const res = await fetch(`${base_url}/fetch/chain`);
  if (!res.ok) {
    throw new Error("Failed to fetch hotels");
  }
  return res.json();
}
