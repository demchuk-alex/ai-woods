"use client";

import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  // Use client-side only rendering for the image to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const image = (
    <div className={cn("w-full overflow-hidden", {
      "rounded-t-lg": slug, // Only round top corners for preview cards with links
      "rounded-lg": !slug    // Round all corners when displayed standalone on post page
    })}>
      <AspectRatio ratio={16/9} className="bg-muted">
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          className={cn("w-full h-full object-cover object-[position:center_25%] transition-all", {
            "hover:scale-110 duration-300": slug,
          })}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          key={isMounted ? "client" : "server"}
          suppressHydrationWarning
        />
      </AspectRatio>
    </div>
  );

  return (
    <div>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
