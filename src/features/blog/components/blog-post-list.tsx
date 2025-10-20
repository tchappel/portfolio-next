"use client";

import { Pagination } from "@/components/pagination";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PostListItem } from "../types";

const postsPerPage = 5;

type BlogPostListProps = {
  posts: PostListItem[];
  currentPage: number;
  totalPages: number;
};

export const BlogPostList = ({
  posts,
  currentPage,
  totalPages,
}: BlogPostListProps) => {
  const router = useRouter();

  return (
    <>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <article
              className="glass p-6 rounded-2xl hover:scale-[1.01] transition-transform cursor-pointer border border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground">{post.descriptions}</p>

                <div className="text-primary font-medium hover:underline">
                  Read more →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          maxVisiblePages={postsPerPage}
          onPageChange={(page) => {
            router.push(`/blog?page=${page}`);
          }}
        />
      )}
    </>
  );
};
