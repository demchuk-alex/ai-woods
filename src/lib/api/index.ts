import { Post } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src/content/posts");
const config = require("../../../next.config.js");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  // Try with .mdx extension first, fall back to .md
  const realSlug = slug.replace(/\.mdx$|\.md$/, "");
  let fullPath = join(postsDirectory, `${realSlug}.mdx`);
  
  // Check if MDX file exists, otherwise use Markdown
  if (!fs.existsSync(fullPath)) {
    fullPath = join(postsDirectory, `${realSlug}.md`);
  }
  
  let fileContents = fs.readFileSync(fullPath, "utf8");

  fileContents = fileContents.replace(/\$\{basePath\}/gi, config.basePath);
  
  const { data, content } = matter(fileContents);

  const post = { ...data, slug: realSlug, content } as Post;

  return post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
    .filter(slug => slug.endsWith('.md') || slug.endsWith('.mdx'));
    
  const posts = slugs
    .map((slug) => {
      const slugWithoutExt = slug.replace(/\.mdx$|\.md$/, "");
      return getPostBySlug(slugWithoutExt);
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
