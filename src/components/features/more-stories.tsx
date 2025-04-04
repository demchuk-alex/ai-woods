import { Post } from "@/types/post";
import { PostPreview } from "./post-preview";
import { Separator } from "@/components/ui/separator";

type Props = {
  posts: Post[];
};

export function PostGrid({ posts }: Props) {
  // Take only the first two posts
  const recentPosts = posts.slice(0, 2);

  return (
    <section>
      <h2 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight font-heading">
        Recent Posts
      </h2>
      <Separator className="my-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 gap-y-6 md:gap-y-8">
        {recentPosts.map((post) => (
          <div key={post.slug} className="overflow-hidden">
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
