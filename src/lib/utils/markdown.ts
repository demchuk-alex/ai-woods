import { remark } from "remark";
import html from "remark-html";
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

// Process standard markdown to HTML
export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Process MDX content
export async function markdownToMdx(content: string) {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypePrettyCode, {
          theme: 'github-dark',
          keepBackground: true,
          // Process meta string (line highlighting info)
          // This is important for handling {1-2} or {3} syntax
          meta: {
            line: {
              component: 'span',
              className: 'highlighted'
            }
          },
          // Callback to get the highlighted code as string
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          // Highlight specific lines
          onVisitHighlightedLine(node: any) {
            if (!node.properties.className) {
              node.properties.className = [];
            }
            node.properties.className.push('highlighted');
          },
          // Highlight specific words
          onVisitHighlightedWord(node: any) {
            if (!node.properties.className) {
              node.properties.className = ['word'];
            } else {
              node.properties.className.push('word');
            }
          },
        }],
      ],
      development: process.env.NODE_ENV === 'development',
    },
    parseFrontmatter: true,
  });
  
  return mdxSource;
}

// Default export for backward compatibility
export default markdownToHtml;
