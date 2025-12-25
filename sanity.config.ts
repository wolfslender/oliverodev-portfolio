
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder_project_id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({defaultApiVersion: apiVersion}),
  ],
})
