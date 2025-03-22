import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: "your-project-id",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  // Add serverToken and browserToken for live preview
  serverToken: process.env.SANITY_SERVER_TOKEN,
  browserToken: process.env.SANITY_BROWSER_TOKEN,
});