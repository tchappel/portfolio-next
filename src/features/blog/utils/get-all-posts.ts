import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { POSTS_PATH } from "../constants";
import { PostSchema } from "../schema";
import { PostListItem, PostMeta } from "../types";

export function getAllPosts(): PostListItem[] {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf-8");
      const { data } = matter(source);

      const meta = PostSchema.parse(data) as PostMeta;

      return {
        slug: file.replace(/\.mdx$/, ""),
        ...meta,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
