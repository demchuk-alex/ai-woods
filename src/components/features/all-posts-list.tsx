"use client";

import { Post } from "@/types/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import DateFormatter from "./date-formatter";
import { useState } from "react";
import { PostPreviewPopup } from "./post-preview-popup";

type Props = {
  posts: Post[];
};

export function AllPostsList({ posts }: Props) {
  const [hoveredPost, setHoveredPost] = useState<Post | null>(null);

  return (
    <section>
      <h2 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight font-heading">
        All Posts
      </h2>
      <Separator className="my-3" />
      <div className="space-y-2">
        {posts.map((post) => (
          <div 
            key={post.slug} 
            className="group relative"
            onMouseEnter={() => setHoveredPost(post)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <Link 
              href={`/posts/${post.slug}`}
              className="flex items-start space-x-3 py-1.5 px-2 hover:bg-muted/50 rounded-md transition-colors"
            >
              <Avatar className="h-8 w-8 mt-1">
                <AvatarImage src={post.author.picture} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium truncate group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  <DateFormatter dateString={post.date} />
                </p>
              </div>
            </Link>
            
            {hoveredPost?.slug === post.slug && (
              <div className="absolute left-full top-0 ml-4 z-50">
                <PostPreviewPopup post={post} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 