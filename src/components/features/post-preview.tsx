import { type Author } from "@/types/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="mb-0">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="leading-tight mb-2 font-heading">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          <DateFormatter dateString={date} />
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-base leading-relaxed">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Avatar name={author.name} picture={author.picture} />
      </CardFooter>
    </Card>
  );
}
