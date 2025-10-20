import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { POSTS_PATH } from "../constants";
import { PostSchema } from "../schema";
import { Post, PostMeta } from "../types";

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(source);

  const meta = PostSchema.parse(data) as PostMeta;

  const { content: mdx } = await compileMDX<{
    frontmatter: PostMeta;
  }>({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      },
    },
  });

  return { ...meta, content: mdx, slug };
}
