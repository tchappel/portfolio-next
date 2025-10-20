import { z } from "zod";

export const PostSchema = z.object({
  title: z.string(),
  date: z
    .string()
    .refine(
      (d) => !Number.isNaN(new Date(d).getTime()),
      "Invalid date format in frontmatter"
    ),
  descriptions: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type PostMeta = z.infer<typeof PostSchema>;
