// sanity/lib/live.ts
"use server"; // Explicitly mark this as a Server Component

import { defineLive } from "next-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "v2023-05-03",
  }),
});
