import { Any } from "next-sanity";

// types.ts (or wherever your ProjectType is defined)
export interface ProjectType {
  name: string;
  tagline?: string;
  projectUrl?: string;
  description?: Any; // PortableText or other rich text format
  coverImage?: {
    image: Any;
    asset: {
      url: string | null;
    } | null;
    alt?: string; // Add the `alt` property here
  } | null;
  logo?: {
    asset: {
      url: string | null;
    } | null;
    alt?: string; // Optional: Add `alt` for the logo as well
  } | null;
}