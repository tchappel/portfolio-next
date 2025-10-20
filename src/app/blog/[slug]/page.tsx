import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/features/blog/utils/get-post-by-slug";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    redirect("/not-found");
  }

  return (
    <div className="min-h-screen">
      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <article className="space-y-8 animate-fade-up">
            <Link href="/blog">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
