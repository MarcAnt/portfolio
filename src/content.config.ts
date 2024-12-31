import { z, defineCollection } from "astro:content";

import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/projects" }),
  schema: z.object({
    infoName: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
    urlGithub: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    stack: z.array(z.string()),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/certifications" }),
  schema: z.object({
    url: z.string().optional(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const experiences = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/data/experiences",
  }),
  schema: z.object({
    experiences: z.array(
      z.object({
        id: z.string(),
        idTrack: z.string(),
        dateTrack: z.string(),
        urlTrack: z.string().or(z.null()),
        companyNameTrack: z.string(),
        titleTrack: z.string(),
        positionTrack: z.string(),
        country: z.string(),
        remote: z.boolean(),
        achievementsTrack: z.array(z.string()),
        whatIDidTrack: z.array(z.string()),
      })
    ),
  }),
});

export const collections = { projects, experiences, certifications };
