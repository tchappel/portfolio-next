import { z } from "zod";
import { PostSchema } from "./schema";

export type PostMeta = z.infer<typeof PostSchema>;

export type PostListItem = PostMeta & {
  slug: string;
};

export type Post = PostListItem & {
  content: React.ReactNode;
};
