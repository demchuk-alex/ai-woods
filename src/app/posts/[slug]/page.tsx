import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/constants";
import markdownToHtml, { markdownToMdx } from "@/lib/utils/markdown";
import Container from "@/components/features/container";
import Header from "@/components/features/header";
import { PostBody } from "@/components/features/post-body";
import { PostHeader } from "@/components/features/post-header";
import BackButton from "@/components/features/back-button";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  // Check if the content should be treated as MDX
  const isMdx = post.content.includes('import') || post.content.includes('export') || post.content.includes('<');
  
  // Process content based on type
  const content = isMdx 
    ? await markdownToMdx(post.content || "") 
    : await markdownToHtml(post.content || "");

  return (
    <main>
      <div className="fixed top-4 left-4 z-50">
        <BackButton />
      </div>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} isMdx={isMdx} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Engineer Diary Blog`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
