"use client";

import { Post } from "@/types/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import DateFormatter from "./date-formatter";

type Props = {
  post: Post;
};

export function PostPreviewPopup({ post }: Props) {
  return (
    <Card className="w-64 overflow-hidden shadow-xl border-2">
      <CardContent className="p-0">
        <div className="relative">
          <AspectRatio ratio={16/9} className="bg-muted">
            <Image
              src={post.coverImage}
              alt={`Cover Image for ${post.title}`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <h3 className="text-white font-medium text-sm line-clamp-2">
              {post.title}
            </h3>
          </div>
        </div>
        <div className="p-3 flex items-center space-x-2 bg-card">
          <Avatar className="h-6 w-6">
            <AvatarImage src={post.author.picture} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{post.author.name}</span>
            <span className="mx-1">•</span>
            <DateFormatter dateString={post.date} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 