"use client";

import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import CodeExample from './code-example';

// Custom components for MDX content
const components = {
  // Add your custom components here to use in MDX
  h1: (props: any) => (
    <h1 
      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight md:leading-none mb-6 text-center md:text-left font-heading" 
      {...props} 
    />
  ),
  h2: (props: any) => (
    <h2 
      className="text-2xl md:text-3xl font-bold tracking-tight mb-4 mt-10 font-heading" 
      {...props} 
    />
  ),
  h3: (props: any) => (
    <h3 
      className="text-xl md:text-2xl font-bold mb-4 mt-8 font-heading" 
      {...props} 
    />
  ),
  p: (props: any) => (
    <p className="text-lg leading-relaxed mb-6" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-8 mb-6 text-lg" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-8 mb-6 text-lg" {...props} />
  ),
  li: (props: any) => (
    <li className="mb-2" {...props} />
  ),
  a: (props: any) => (
    <a className="text-primary underline hover:text-primary/80" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
  ),
  // Code blocks are handled by rehype-pretty-code
  // Provide React explicitly to MDX content
  wrapper: (props: any) => <React.Fragment {...props} />,
  // Add the CodeExample component for interactive examples
  CodeExample
};

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

// Create client-only version
function MdxContentClient({ source }: MdxContentProps) {
  // Memoize the components to avoid unnecessary re-renders
  const mdxComponents = useMemo(() => components, []);
  
  return (
    <div className="mdx-content prose dark:prose-invert max-w-none">
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  );
}

// Export a dynamic component with SSR disabled
export const MdxContent = dynamic(
  () => Promise.resolve(MdxContentClient),
  { ssr: false }
); 