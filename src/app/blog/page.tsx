import { BlogPostList } from "@/features/blog/components/blog-post-list";
import { getAllPosts } from "@/features/blog/utils/get-all-posts";

const postsPerPage = 5;

type BlogProps = {
  searchParams: {
    page?: string;
  };
};

const Blog = ({ searchParams }: BlogProps) => {
  const posts = getAllPosts();

  const currentPage = Math.max(1, Number(searchParams.page ?? "1"));
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12 animate-fade-up">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Thoughts on web development, design, and technology
              </p>
            </div>

            <BlogPostList
              posts={currentPosts}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
